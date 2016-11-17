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

router.post("/burger/create", function(req, res) {
	models.burger.create({burger_name: req.body.burger_name}).then(function(result) {
		res.redirect("/index");
	});
});

router.put("/burgers/update/:id", function(req, res) {
	models.burger.update({devoured: req.body.devoured}, {where: {id: req.params.id}}).then(function(result) {
		res.redirect("/index");
	}); 	
});

module.exports = router;
