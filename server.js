// Boilerplate code 2-35
var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var port = process.env.PORT || 3000;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var mysql = require("mysql");

//Needs password
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

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});



// Serve index.handlebars to the root route.
app.get("/index", function(req, res) {
  res.render("index", { });
});

// Serve about.handlebars to the root route.
app.get("/about", function(req, res) {
  res.render("about", { });
});


// app.post("/checkin", function(req, res) {
//   res.render("index", { });
// });

app.get("/event", function(req, res) {
  res.render("event", { });
});



app.listen(port, function() {
  console.log("Listening on PORT " + port);
});

// connection.connect();
// module.exports = connection;