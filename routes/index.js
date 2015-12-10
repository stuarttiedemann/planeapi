var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;
var mongoUrl = 'mongodb://localhost:27017/airplaneapi';// connect to database named airplaneapi

var AirplaneData = require('../models/airplanedata');// Use the airplanedata model

var db;
var mongoose = require('mongoose');
mongoose.connect(mongoUrl);


/* GET photos page. Will post new entries into database collection*/
router.post('/airplanedata/post', function(req, res, next) {
	var planeData = new AirplaneData(); // Create a new planeData object from the AirPlaneData() constructor from line 7
	planeData.passenger = req.body.passenger;
	planeData.weight = req.body.weight;
	planeData.range = req.body.range;

	planeData.save(function(err){// Save the new object and either display error or Data added
		if(err){
			console.log(err);
		}else{
			res.json({message: 'Data Added'});
		}
	});
});

// This will update/modify an existing collection in the database.
router.put('/airplanedata/put',function(req, res, next){
	AirplaneData.findById(req.body._id, function(err, planeResult){ //planeResult is just what is sent back and can be called anything
		if(err){
			console.log(err);
		}else{
			planeResult.passenger = req.body.passenger;
			planeResult.weight = req.body.weight;
			planeResult.range =  req.body.range;
			planeResult.save(function(err){
				if(err){
					console.log(err);
				}else{
					res.json({message:" No clue how this worked but somehow you updated the database"});
				}
			});
		}
	});
});

router.delete('/airplanedata/delete', function(req, res, next){
	console.log(req.body);
	AirplaneData.remove({
		_id: req.body._id
	},function(err,photo){
		if(err){
			console.log(err);
		}else{
			res.json({message:"Successfully Deleted"});
		}
	
	});
});







module.exports = router;
