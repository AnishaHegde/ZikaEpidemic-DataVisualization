var localStorage= require('localStorage');
var colorArray ={};
var math = require('mathjs');

exports.acceptLocation=function(req,res){
	var number=req.body.number,
	latitude=req.body.latitude,
	longitude=req.body.longitude;
	var color='#'+math.floor(math.random()*16777215).toString(16);
	console.log(color);
	if(colorArray[number]===undefined){
		colorArray[number]=color;
	}
	if(localStorage.getItem(number)===null){
		localStorage.setItem(number,latitude+","+longitude+","+colorArray[number]);
	}else{
		localStorage.removeItem(number);
		localStorage.setItem(number,latitude+","+longitude+","+colorArray[number]);
	}
	console.log(colorArray);
	console.log(localStorage);
	res.send("done");
}

exports.getLocation=function(req,res){
	res.send(localStorage);
}