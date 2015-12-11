// This establishes the schema for our mongo database
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//  All entries to the database will have passenger, weight, & range
var photoSchema = new Schema({
	id: String,
	passenger: Number,
	weight: Number,
	range: Number,
	image: String
});

module.exports = mongoose.model('airplanedata', photoSchema);//