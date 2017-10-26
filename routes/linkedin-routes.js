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
	  	console.log(req.user._json.publicProfileUrl)
	  	console.log(req.headers.referer);


	  	var referer = req.headers.referer
	  	var eventName = referer.substr(referer.lastIndexOf('/') + 1);
	  	//referrer.Substring(referrer.Substring(0, referrer.LastIndexOf("/")).LastIndexOf("/") + 1);
	    
	    db.User.create(
	    	{
		    	linkedin_id: req.user.id,
		    	profile_url: req.user._json.publicProfileUrl,
		    	first_name: req.user.name.givenName,
		    	last_name: req.user.name.familyName,
		    	picture: req.user.photos[0].value,
		    	email: req.user.emails[0].value,
		    	event_url: eventName
	   		 }

		).then(function(dbUser) {
      		res.redirect(req.headers.referer);
    	});
    
  	});

	// app.get('/auth/linkedin/callback',
	//   passport.authenticate('linkedin', { failureRedirect: '/login' }),
	//   function(req, res) {
	//   	res.redirect('/');
  	};
