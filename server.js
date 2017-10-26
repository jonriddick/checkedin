// Boilerplate code 2-35
var express = require("express");
var Sequelize = require('sequelize');
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;


var app = express();
var PORT = process.env.PORT || 3300;

var db = require("./models");


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
//var config = require("./config/linkedin");

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});
console.log("------");

console.log(config.LINKEDIN_CLIENT_ID);

passport.use(new LinkedInStrategy({
    clientID:     process.env.LINKEDIN_CLIENT_ID,
    clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
    // callbackURL:  "http://localhost:3000/auth/linkedin/callback",
    callbackURL: process.env.CALLBACKURL,
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

var connection;


if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Sundrop7@",
    database: "checkedin_db"
  });
};

// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });





db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});



connection.connect();
module.exports = connection;
