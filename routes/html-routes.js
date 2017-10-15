// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

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
	  res.render("about", { });
	});


	app.get("/event", function(req, res) {
	  res.render("event", { });
	});

	// app.post("/checkin", function(req, res) {
	//   res.render("index", { });
	// });

<<<<<<< HEAD

=======
>>>>>>> 7231beb4d515a90392eef3122e58551f0e98f2c1
	app.get("/event", function(req, res) {
		
	  res.render("event", {eventName});
        });

	app.get("/event/:eventName", function(req, res) {
		db.Event.get(where: { event_name_sanitized: req.params.eventName }).then(function(event){
	         res.render("event", { event: event });		
		})
	});
<<<<<<< HEAD
=======

>>>>>>> 7231beb4d515a90392eef3122e58551f0e98f2c1

	// app.get("/api/*", function(req, res) {
	//     res.render("index", { });
	// });
}
