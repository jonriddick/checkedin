// var events = require("../public/assets/js/events.js");
// var users = require("../public/assets/js/users.js");
var db = require("../models");
var Event = require("../models/events.js");

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
  	db.User.findAll({})
  	.then(function(dbUser){
  	res.json(dbUser);
  	});    
  });

//
//
//

// Search for Specific event (or all characters) then provides JSON
  app.get("/api/events/host/:host?", function(req, res) {

    // If the user provides a specific character in the URL...
    if (req.params.host) {

      // Then display the JSON for ONLY that character.
      // (Note how we're using the ORM here to run our searches)
      db.Event.findOne({
        where: {
          event_host: req.params.host
        }
      }).then(function(result) {
        return res.json(result);
      });
    }

    // Otherwise...
    else {
      // Otherwise display the data for all of the characters.
      // (Note how we're using Sequelize here to run our searches)
      db.Event.findAll({})
        .then(function(result) {
          return res.json(result);
        });
    }

  });

//
//
//

  // POST route for saving a new user
  app.post("/api/users", function(req, res) {
    db.User.create(req.body).then(function(dbUser) {
      res.json(dbUser);
    });
  });


function sanitize(event_name) {
  return // sanitized event name
}
  // POST route for saving a new event
  app.post("/api/events", function(req, res) {
    var event_name_sanitize = sanitize(req.body.event_name)
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