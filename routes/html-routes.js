// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var db = require("../models")
// var connection = require()

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

	// Serve index.handlebars to the root route.
	app.get("/index", function(req, res) {
	  res.render("index", { });
	});

	app.get("/", function(req, res) {
	  res.render("index", { });
	});

	// Serve about.handlebars to the root route.
	app.get("/about", function(req, res) {
	  res.render("about");
	});

	app.get("/faq", function(req, res) {
	  res.render("faq");
	});

	app.get("/thankyou", function(req, res) {
	  res.render("thankyou", { });
	});

	app.get("/event", function(req, res) {
	  res.render("event", { });
	});



	var eventInfo = function(req, res) {
		db.Event.findOne({
			where: {
				sanitized_event_name: req.params.eventName
			}
		});
	}

	app.get("/event/:eventName", function(req, res) {
		//var dbQuery = "SELECT * FROM users where event_url = req.params";

		// This one is the good one!! :)
		db.Event.findOne({
			where: {
				sanitized_event_name: req.params.eventName
			},
				include: [db.User]
		}).then(function(eventData){
				console.log("**************");
				console.log(eventData.Users);
				console.log("**************");
				//console.log(eventData.Users[1]);
				console.log("**************");
	 		  res.render("event", { key: eventData });		
		});
	});
}