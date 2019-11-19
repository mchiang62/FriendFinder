var express = require("express");
// var bodyParser = require("body-parser");
var path = require("path");

var app = express();

var PORT = process.env.PORT || 8000;

// returns json and string text and sets type

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static("app/public"));

// applying routes

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


app.listen(PORT, function() {
    console.log("App listening on PORT: http://localhost:" + PORT);
  });

//   server is working!
