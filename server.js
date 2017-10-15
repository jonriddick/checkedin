// Boilerplate code 2-35
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;


var app = express();
var PORT = process.env.PORT || 3300;

var db = require("./models");

// var LINKEDIN_CLIENT_ID = "81116weiwd0uze";
// var LINKEDIN_CLIENT_SECRET = "GtjYCyPFp3b2Vdjm";
// var CALLBACKURL = "http://127.0.0.1:3300/auth/linkedin/callback";

// Parse application/x-www-form-urlencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Routes
// =============================================================


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var passport = require("passport");
var session = require("express-session");
var config = require('./config/config');

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

// passport.use(new LinkedInStrategy({
//     // consumerKey: config.linkedin.clientID,
//     clientID: "81116weiwd0uze",
//     // consumerSecret: config.linkedin.clientSecret,
//     clientSecret: "GtjYCyPFp3b2Vdjm",
//     // callbackURL: config.linkedin.callbackURL,
//     callbackURL: "http://127.0.0.1:3300/auth/linkedin/callback",
//     scope: ['r_emailaddress', 'r_basicprofile'],
//     profileFields: ['id', 'first-name', 'last-name', 'email-address', 'public-profile-url', 'picture-url'],
//     // state: true
//     passReqToCallback: true
//   },
//   // linkedin sends back the tokens and profile info
//   function(req, accessToken, refreshToken, profile, done) {
//     req.session.accessToken = accessToken;
//     process.nextTick(function() {
//       // console.log(profile);
//       return done(null, profile);
//     });
//   }
// ));
passport.use(new LinkedInStrategy({
    clientID:     config.LINKEDIN_CLIENT_ID,
    clientSecret: config.LINKEDIN_CLIENT_SECRET,
    // callbackURL:  "http://localhost:3000/auth/linkedin/callback",
    callbackURL: config.CALLBACKURL,
    scope:        [ 'r_basicprofile', 'r_emailaddress'],
    profileFields: ['id', 'first-name', 'last-name', 'email-address', 'public-profile-url', 'picture-url'],
    passReqToCallback: true
  },
  function(req, accessToken, refreshToken, profile, done) {
    // asynchronous verification, for effect...
    req.session.accessToken = accessToken;
    process.nextTick(function () {
      // To keep the example simple, the user's Linkedin profile is returned to
      // represent the logged-in user.  In a typical application, you would want
      // to associate the Linkedin account with a user record in your database,
      // and return that user instead.
      return done(null, profile);
    });
  }
));

// app.use(express.session({ secret: 'keyboard cat' }));
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);
require("./routes/linkedin-routes.js")(app, passport);

var mysql = require("mysql");

//Needs password
//var connection;


// if (process.env.JAWSDB_URL) {
//   connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
//   connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "root",
//     database: "checkedin_db"
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});



// if (process.env.JAWSDB_URL) {
//   connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
//   connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "Sundrop7@",
//     database: "checkedin_db"
//   });
// };

// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });





// connection.connect();
// module.exports = connection;