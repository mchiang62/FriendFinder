var express = require("express");
// var bodyParser = require("body-parser");
var path = require("path");

var app = express();

var PORT = process.env.PORT || 8000;

// returns json and string text and sets type

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.text());
app.use(express.json({ type: "application/vnd.api+json" }));

app.use(express.static("app/public"));

// applying routes

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);


app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });

//   server is working!
