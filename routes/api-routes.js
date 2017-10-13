// var events = require("../public/assets/js/events.js");
// var users = require("../public/assets/js/users.js");
var db = require("../models");

module.exports = function(app) {

	// GET route for getting all of the events
	app.get("/api/events", function(req, res) {
		db.Event.findAll({})
		.then(function(dbEvent){
	  res.json(dbEvent);
		});
	});

	// GET route for getting all of the users
  app.get("/api/users", function(req, res) {
    res.json(users);
  });

  // POST route for saving a new user
  app.post("/api/users", function(req, res) {
    db.User.create(req.body).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // POST route for saving a new event
  app.post("/api/events", function(req, res) {
    db.Event.create(req.body
    	// event_host: req.body.event_host,
    	// event_location: req.body.event_location,
    	// event_name: req.body.event_name,
    	// event_description: req.body.event_description,
    	// event_keyword1: req.body.event_keyword1,
    	// event_keyword2: req.body.event_keyword2,
    	// event_keyword3: req.body.event_keyword3
    ).then(function(dbEvent) {
      res.json(dbEvent);
    });
  });

}