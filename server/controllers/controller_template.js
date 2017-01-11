//Controller template
var path = require("path");
var htmlPath = path.join(__dirname, "./../../client/");
var requireFolder = require("./../config/req_folder.js");
var models = requireFolder("models");

module.exports = {
	test: function(req, res){
		console.log("controller function called successfully");
		var result = models.model_template.test(req, res);
		console.log(result);
		res.send("successfully made it through route->controller->model->response");
	}
}