
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var items = [];

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

app.get("/", function(req, res){

	var today = new Date();
	var options = {
		weekday: "long",
		day: "numeric",
		month: "long"
	};

	var currentDay = today.toLocaleDateString("en-US",options);

	res.render("list",{kindOfDay: currentDay, newItemList: items});

})

app.post("/",function(req, res){
	var item = req.body.newItem;
	items.push(item);

	console.log(item);

	res.redirect("/");
})

app.listen(5000, function(req, res){
	console.log('Server started on port 5000');
}) 