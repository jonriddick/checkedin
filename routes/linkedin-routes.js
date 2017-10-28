// var passport = require('passport');
var db = require("../models");
module.exports = function(app, passport) {

	//var eventNameURL = req.query.state;
	
	// ***This kind of works***
	// app.get('/auth/linkedin',
	//   passport.authenticate('linkedin', { state: sleepyDogs}),
	//   function(req, res){
	//     // The request will be redirected to LinkedIn for authentication, so this
	//     // function will not be called.
	// });

	app.get('/auth/linkedin/:event',function(req, res){
		//var sleepyDogs = req.params.event
	    passport.authenticate('linkedin', { state: req.params.event})
	});

	app.get('/auth/linkedin/callback',
	  passport.authenticate('linkedin', { failureRedirect: '/login' }),
	  function(req, res) {
	  	//console.log({user: req.user});
	  	console.log("********************")
	  	console.log("********************")
	  	//console.log("id" + req.user.id);
	  	console.log("first" + req.user.name.givenName);
	  	console.log("last" + req.user.name.familyName);
	  	console.log("state" + req.query.state)
	  	// console.log("email" + req.user.emails[0].value);
	  	// console.log("photo" + req.user.photos[0].value);
	  	// console.log("email" + req.user._json.emailAddress);
	  	// console.log("profile" + req.user._json.publicProfileUrl)
	  	// console.log("referer" + req.headers.referer);
	  	console.log("********************")
	  	console.log("********************")
	  	

	  	var referer = req.headers.referer;
	  	console.log("********");
	  	console.log(referer);
	  	console.log("********");
	  	console.log(req);
	  	console.log("********");

	  	//var eventName = referer.substr(referer.lastIndexOf('/') + 1);
	  	//referrer.Substring(referrer.Substring(0, referrer.LastIndexOf("/")).LastIndexOf("/") + 1);
	    var eventName = req.query.state

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
      		// res.redirect(req.headers.referer);
      		res.redirect('https://murmuring-hollows-12285.herokuapp.com/event/' + eventName);

    	});
  	});
};
