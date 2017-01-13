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
		var validationErrors = [];

		if(req.body.first_name.length < 1)
		{
			valid = false;
			validationErrors.push("First name is required.");
		}
		if(req.body.last_name.length < 1)
		{
			valid = false;
			validationErrors.push("Last name is required.");
		}
		if(req.body.email.length < 1)
		{
			valid = false;
			validationErrors.push("Email is required.");
		}

		if(req.body.pw1 !== req.body.pw2)
		{
			valid = false;
			validationErrors.push("Passwords do not match.");
		}

		if(valid === true)
		{
			models.registrationModel.newUser(req, res, function(err, rows, fields){
				for(key in err){
					console.log(key, ":", err[key]);
					console.log("--");
				}
				console.log(err.errno);
				if(err.errno !== undefined)
				{
					switch(err.errno)
					{
						case 1062: validationErrors.push("Email address already taken.");
						break;
					}
				}
				res.json({err: validationErrors, rows: rows});
			});
		}
		else
		{
			console.log("Validation failed.");
			res.json({err: validationErrors, rows: undefined});
		}
	}
};