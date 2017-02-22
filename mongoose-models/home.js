module.exports = function(mongoose){

  //require the populate post function
  var populatePosts = require('./../app/monPop').populatePosts;

  // Create a new mongoose schema
  var HomeSchema = mongoose.Schema({
    address: {type: String, required: true},
    coordinates:[{
      latitude: {type: Number, required: true},
      longitude: {type: Number, required: true}
    }],
    area: {type: String, required: true},
    type: {type: String, required: true},
    size: {type: Number, required: true},
    rooms: {type: Number, required: true},
    toilets: {type: Number, required: true},
    garden: {type: Boolean, required: true},
    balcony: {type: Boolean, required: true},
    price: {type: Number, required: true},
    img: [{
      name: {type: String, required: true},
      url: {type: String, required: true}
    }],
    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Seller',
      required: true
    },
    description: {type: String, required: true},
    show: [{
      day: {type: Number, required: true},
      month: {type: Number, required: true},
      hour: {type: Number, required: true},
      minutes: {type: Number, required: true},
      open: {type: Boolean, required: true}
    }]
  });

  //enforce the schema required key even when the PUT method is used
  //we use .pre since we want to validate before saving it to the database
  HomeSchema.pre('update', function(next) {
    this.options.runValidators = true;
    next();
  });

  //after GET we populate the required fields
  HomeSchema.post('find', function(docs, next) {
    populatePosts(docs, 'seller', next);
  });

  // Return the model
  return mongoose.model("Home", HomeSchema);
};