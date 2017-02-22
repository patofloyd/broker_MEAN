module.exports = function(mongoose) {

	
	var AboutSchema = mongoose.Schema({

		title: {type: String, required: true},
		titles: {type: String, required: true},
		content: {type: String, required: true},
		contents: {type: String, required: true},
		img: {type: String, required: true},
		imgs: {type: String, required: true}

	});

	AboutSchema.pre('update', function(next){
		this.options.runValidators = true;
		next();

	});

	return mongoose.model("About", AboutSchema);

}
	