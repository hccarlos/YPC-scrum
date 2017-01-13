//Controller template

//the following things enable this controller to access the models, and also to send html files as responses
var path = require("path");
var htmlPath = path.join(__dirname, "./../../client/");
var requireFolder = require("./../config/req_folder.js");
var models = requireFolder("models");

//when you call a model function it should return a value (usually an array, the result of a query)
//after that you can make the response here in the controller

module.exports = {
  login: function(req, res) {
    // check to see if user with this email exists:

    // check to see whether their password matches the hashed password
    // please use bcrypt

    // if successful, send a json object in response that looks like {user_id: user.id}

    // if failed, send json {user_id: nil, errors: [error messages here]}
    
  },
  logout: function(req, res) {

  }
}
