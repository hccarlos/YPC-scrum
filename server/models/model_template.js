//template for a model file

//require this to be able to do queries
var connection = require('../config/mysql.js');
var doQuery = require('../config/doquery_function.js');

module.exports = {
	test: function(req, res){
		console.log("model function called successfully");
		var result = doQuery("select * from users");
		return result;
	}
}

