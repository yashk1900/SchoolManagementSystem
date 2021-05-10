const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");

// This will be our application entry. We'll setup our server here.
const http = require("http");

// Set up the express app
const app = express();

// Log requests to the console.
app.use(logger("dev"));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));
// Setup a default catch-all route that sends back a welcome message in JSON format.

//Sync Models
const models = require("./models/indexModel");
//Sync Database with models

models.sequelize
  .sync()
  .then(function () {
    console.log("Successfully connected to the database");
  })
  .catch(function (err) {
    console.log(err, "Something went wrong while connecting to the database");
  });

//Require routes into the application
var routes = require("./routes/indexRoutes"); //importing route

var AuthController = require("./Auth/authController");
app.use("/api/auth", AuthController);

routes(app);

app.get("*", function (req, res) {
  res.sendfile("./public/index.html"); // load the single view file (angular will handle the page changes on the front-end)
});

const port = parseInt(process.env.PORT, 10) || 4050;
app.set("port", port);
const server = http.createServer(app);
server.listen(port);
module.exports = app;
