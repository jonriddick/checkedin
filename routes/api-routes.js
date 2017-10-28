// var events = require("../public/assets/js/events.js");
// var users = require("../public/assets/js/users.js");
var db = require("../models");
var Event = require("../models/events.js");

module.exports = function(app) {

  

	// GET route for getting all of the events
	// app.get("/api/events", function(req, res) {
	// 	db.Event.findAll({
 //      include: [{
 //        model: users,
 //        where: { event_url: Sequelize.col('http://127.0.0.1:3300/event/' + 'Event.sanitized_event_name') }
 //    }]})
	// 	.then(function(dbEvent){
	//   res.json(dbEvent);
	// 	});
	// });
    
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

  app.get("/api/emails", function(req, res) {
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
      db.Event.findAll({
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

    app.get("/api/users/event/:eventName?", function(req, res) {

    // If the user provides a specific character in the URL...
    if (req.params.eventName) {

      // Then display the JSON for ONLY that character.
      // (Note how we're using the ORM here to run our searches)
      db.User.findAll({
        where: {
          event_name: req.params.eventName
        }
      }).then(function(result) {
        return res.json(result);
      });
    }

    // Otherwise...
    else {
      // Otherwise display the data for all of the characters.
      // (Note how we're using Sequelize here to run our searches)
      db.User.findAll({})
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
    var event_name = event_name.replace(/\s+/g, '');
    var event_name = event_name.toLowerCase();
    return event_name;
  }
  // POST route for saving a new event
  app.post("/api/events", function(req, res) {
    var sanitized_event_name = sanitize(req.body.event_name)
    db.Event.create({
    	event_host: req.body.event_host,
    	event_location: req.body.event_location,
    	event_name: req.body.event_name,
      sanitized_event_name: sanitized_event_name,
    	event_description: req.body.event_description,
    	event_keyword1: req.body.event_keyword1,
    	event_keyword2: req.body.event_keyword2,
    	event_keyword3: req.body.event_keyword3
    }).then(function(dbEvent) {
      res.json(dbEvent);
    });
  });

}





