
var fs = require("fs");
var path = require("path");
var controllerPath = path.join(__dirname, "./../controllers");
fs.readdirSync(controllerPath).forEach(function(file) {
  if(file.indexOf('.js') >= 0) {
    require(controllerPath + '/' + file);
    //console.log(file);
  }
});

module.exports = function(app){
	app.post('/dummies/:test', function(req, res){
		
		// I'm testing the info that I'm getting from my dummy Factory
		// I console.log the body and the params just to make sure that it's
		// going through 

		console.log(req.body);
		console.log(req.params.test)
	});

	app.get('/register', function(req, res){
		
	});
}