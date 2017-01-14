//Registration controller
var path = require("path");
var htmlPath = path.join(__dirname, "./../../client/");
var requireFolder = require("./../config/req_folder.js");
requireFolder("models");

module.exports = {
	regPage: function(req, res){
		//do stuff
		res.sendFile("register.html", {root: htmlPath});
	}
};
