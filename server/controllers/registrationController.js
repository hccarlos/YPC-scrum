//Registration controller
//This controller handles registration for members

//

var path = require("path");
var htmlPath = path.join(__dirname, "./../../client/");
var requireFolder = require("./../config/req_folder.js");
var models = requireFolder("models");

module.exports = {

	//sends the registration page
	regPage: function(req, res){
		//do stuff
		res.sendFile("register.html", {root: htmlPath});
	},

	//user tries to register
	newUser: function(req, res){
		console.log(req.body);
		var valid = true;
		var vErrMsgs = [];

		if(req.body.first_name.length < 1)
		{
			valid = false;
			vErrMsgs.push("First name is required.");
		}
		if(req.body.last_name.length < 1)
		{
			valid = false;
			vErrMsgs.push("Last name is required.");
		}
		if(req.body.email.length < 1)
		{
			valid = false;
			vErrMsgs.push("Email is required.");
		}

		if(req.body.pw1 !== req.body.pw2)
		{
			valid = false;
			vErrMsgs.push("Passwords do not match.");
		}

		if(valid === true)
		{
			models.registrationModel.newUser(req, res, function(err, rows, fields){
				res.json({err: err, rows: rows});
			});
		}
		else
		{
			console.log("Validation failed.");
			res.json({err: vErrMsgs, rows: undefined});
		}
	}
};