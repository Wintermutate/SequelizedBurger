var express = require("express");
var models = require("../models/");

var router = express.Router();

models.sequelize.sync();

router.get("/", function(req, res) {
	res.redirect("/index");
});

router.get("/index", function(req, res) {
	models.burger.findAll().then(function(result) {
		res.render("index", {burgers: result});
	});
		
});

router.post("/burger/new", function(req, res) {
	models.burger.create({burger_name: req.body.burger_name}).then(function(instance) {
		res.send({redirect:"/index"});
	});
});

router.post("/burger/update", function(req, res) {
	models.burger.update({devoured: true}, {where: {burger_name: req.body.burger_name}}).then(function(instance) {
		res.send({redirect:"/index"});
	}); 
	
});

module.exports = router;
