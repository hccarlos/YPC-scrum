//Login controller
var path = require("path");
var htmlPath = path.join(__dirname, "./../../client/");
var requireFolder = require("./../config/req_folder.js");
requireFolder("models");

//when you call a model function it should return a value (usually an array, the result of a query)
//after that you can make the response here in the controller

module.exports = {
  loginPage: function(req,res){
    res.sendFile("login.html", {root: htmlPath});
  },

  loginAttempt: function(req, res) {
    console.log(req.body);
    var valid = true;
    var validationErrors = [];
    // check to see if user with this email exists:

    if(valid === true)
    {
      models.loginmodel.loginAttempt(req, res, function(err, rows, fields){
        if(err)
        {
          console.log("entered wrong email or password");
          res.json({err: validationErrors, rows: rows});
        }
        else
        {
          !bcrypt.compareSync(req.body.password, hashedPW)
          return callback();
        }
      });

    }
    // check to see whether their password matches the hashed password
    // please use bcrypt

    // if(req.body.pw1 !== )
    // if successful, send a json object in response that looks like {user_id: user.id}

    // if failed, send json {user_id: nil, errors: [error messages here]}

  // logout: function(req, res) {

  // }
  },
};
