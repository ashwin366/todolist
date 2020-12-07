
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){

	var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	var today = new Date();
	var currentDay = today.getDay();

	res.render("list",{kindOfDay: days[currentDay]});

})

app.listen(3000, function(req, res){
	console.log('Server started on port 3000');
}) 