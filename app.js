
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){

	var today = new Date();
	var options = {
		weekday: "long",
		day: "numeric",
		month: "long"
	};

	var currentDay = today.toLocaleDateString("en-US",options);

	res.render("list",{kindOfDay: currentDay});

})

app.listen(3000, function(req, res){
	console.log('Server started on port 3000');
}) 