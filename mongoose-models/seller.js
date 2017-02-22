module.exports = function(mongoose){

  // Create a new mongoose schema
  var SellerSchema = mongoose.Schema({
    name: {type: String, required: true},
    position: {type: String, required: true},
    phone: {type: Number, required: true},
    email: {type: String, required: true},
    about: {type: String, required: true},
    img: {type: String, required: false} 
  });

  //enforce the schema required key even when the PUT method is used
  //we use .pre since we want to validate before saving it to the database
  SellerSchema.pre('update', function(next) {
    this.options.runValidators = true;
    next();
  });

  // Return the model
  return mongoose.model("Seller", SellerSchema);
};