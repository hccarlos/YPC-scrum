//Controller template

var requireFolder = require("./../config/req_folder.js");
var models = requireFolder("models");

module.exports = {
	test: function(req, res){
		console.log("controller function called successfully");
		models.model_template.test(req, res);
	}
}