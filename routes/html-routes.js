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
	  res.render("about", { });
	});

	app.get("/thankyou", function(req, res) {
	  res.render("thankyou", { });
	});


	// app.get("/event", function(req, res) {
	//   res.render("event", { });
	// });

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
		var dbQuery = "SELECT * FROM users";


		db.Event.findOne({
			where: {
				sanitized_event_name: req.params.eventName
			},
				include: [db.User]
		}).then(function(eventData){
	         res.render("event", { key: eventData });		
		});

		
	});

	// app.get("/event/:eventName", function(req, res) {
	// 	db.Event.findOne({
	// 		where: {
	// 			sanitized_event_name: req.params.eventName
	// 		}
	// 	}).then(function(event){
	// 		db.User.findAll({
	// 			where: {
	// 				eventId: event.
	// 			}
	//          res.render("event", { key: event });		
	// 	});

		
	// });

	// app.get("/event/:eventName", function(req, res) {
	// 	db.Event.findOne({
	// 		where: {
	// 			sanitized_event_name: req.params.eventName
	// 		}
	// 	}),
	// 	db.User.findAll({
	// 			where: {
	// 				eventId: 1
	// 			}
	// 	then(function(data){
			
	//          res.render("event", { key: data });		
	// 	});

		
	// });


	

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
