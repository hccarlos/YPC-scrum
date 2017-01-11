//modules
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var mysql = require("mysql");
//var bcrypt = require("bcryptjs");
var session = require("express-session");
var crypto = require("crypto");
var app = express();
var port = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, '/client')));

console.log(__dirname + '/client');

app.use(session({
  secret: crypto.randomBytes(48).toString("hex"),
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false, httpOnly: true}
}));

require('./server/config/routes.js')(app);

var server = app.listen(port, function()
{
	console.log("listening on port", port);
});
