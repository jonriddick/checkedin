// var passport = require('passport');
// var LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;

// var User = require('../models/');
// var config = require('../../config');
// require("../routes/linkedin-routes.js");

// // Use the LinkedInStrategy within Passport.
// //   Strategies in passport require a `verify` function, which accept
// //   credentials (in this case, a token, tokenSecret, and LinkedIn profile), and
// //   invoke a callback with a user object.
// passport.use(new LinkedInStrategy({
//     consumerKey: config.linkedin.clientID,
//     consumerSecret: config.linkedin.clientSecret,
//     callbackURL: config.linkedin.callbackURL,
//     scope: ['r_emailaddress', 'r_basicprofile'],
//     profileFields: ['id', 'first-name', 'last-name', 'email-address', 'public-profile-url', 'picture-url'],
//     // state: true
//     passReqToCallback: true
//   },
//   // linkedin sends back the tokens and profile info
//   function(req, accessToken, refreshToken, profile, done) {
//     req.session.accessToken = accessToken;
//     process.nextTick(function() {
//       console.log(profile);
//       return done(null, profile);
//     });
//   }
// ));



// // GET /auth/linkedin
// //   Use passport.authenticate() as route middleware to authenticate the
// //   request.  The first step in LinkedIn authentication will involve
// //   redirecting the user to linkedin.com.  After authorization, LinkedIn will
// //   redirect the user back to this application at /auth/linkedin/callback
// // app.get('/auth/linkedin',
// //   passport.authenticate('linkedin'),
// //   function(req, res){
// //     // The request will be redirected to LinkedIn for authentication, so this
// //     // function will not be called.
// //   });

// // // GET /auth/linkedin/callback
// // //   Use passport.authenticate() as route middleware to authenticate the
// // //   request.  If authentication fails, the user will be redirected back to the
// // //   login page.  Otherwise, the primary route function function will be called,
// // //   which, in this example, will redirect the user to the home page.
// // app.get('/auth/linkedin/callback', passport.authenticate('linkedin'), {
// //   successRedirect: '/index',
// //   failureRedirect: '/login'
// //   });




  



// module.exports = passport;