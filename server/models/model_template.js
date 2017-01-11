//template for a model file

//require this to be able to do queries
var connection = require('mysql');
var doQuery = require('../config/doquery_function.js');

module.exports = {
	test: function(req, res){
		console.log("model function called successfully");
		res.send("successfully made it through route->controller->model->response");
	}
}

