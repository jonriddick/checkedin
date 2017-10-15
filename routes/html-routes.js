// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var db = require("../models")

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


	app.get("/event", function(req, res) {
		
	  res.render("event", {eventName});
        });

	var eventInfo = function(req, res) {
		db.Event.findOne({
			where: {
				sanitized_event_name: req.params.eventName
			}
		});

	}


	app.get("/event/:eventName", function(req, res) {
		db.Event.findOne({
			where: {
				sanitized_event_name: req.params.eventName
			}
		}).then(function(event){
	         res.render("event", { event: eventInfo });		
		});
	});


	

	// app.get("/api/*", function(req, res) {
	//     res.render("index", { });
	// });
}

// app.delete("/api/todos/:id", function(req, res) {
//     // We just have to specify which todo we want to destroy with "where"
//     db.Todo.destroy({
//       where: {
//         id: req.params.id
//       }
//     }).then(function(dbTodo) {
//       res.json(dbTodo);
//     });

//   });
