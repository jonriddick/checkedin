// var passport = require('passport');
var db = require("../models");
module.exports = function(app, passport) {

	app.get('/auth/linkedin',
	  passport.authenticate('linkedin', { state: 'SOME STATE'  }),
	  function(req, res){
	    // The request will be redirected to LinkedIn for authentication, so this
	    // function will not be called.
	});

	app.get('/auth/linkedin/callback',
	  passport.authenticate('linkedin', { failureRedirect: '/login' }),
	  function(req, res) {
	  	console.log({user: req.user});
	  	console.log(req.user.id);
	  	console.log(req.user.name.givenName);
	  	console.log(req.user.name.familyName);
	  	console.log(req.user.emails[0].value);
	  	console.log(req.user.photos[0].value);
	  	console.log(req.user._json.emailAddress);

	  	
	    db.User.create(
	    	{
		    	linkedin_id: req.user.id,
		    	first_name: req.user.name.givenName,
		    	last_name: req.user.name.familyName,
		    	picture: req.user.photos[0].value,
		    	email: req.user.emails[0].value
	   		 }

		).then(function(dbUser) {
      		res.redirect('/event');
    	});
    
  	});

	// app.get('/auth/linkedin/callback',
	//   passport.authenticate('linkedin', { failureRedirect: '/login' }),
	//   function(req, res) {
	//   	res.redirect('/');
  	};
