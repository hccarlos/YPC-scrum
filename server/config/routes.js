var fs = require("fs");
var path = require("path");
var controllerPath = path.join(__dirname, "./../controllers");
var controllers = {};

fs.readdirSync(controllerPath).forEach(function(file) {
  if(file.indexOf('.js') >= 0) {
    controllers[file.slice(0, (file.length - 3))] = require(path.join(controllerPath, file));
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

	//testing to see if the whole chain of files works
	app.get('/test', controllers.controller_template.test);

	app.get('/registration', controllers.registrationController.regPage);

  // main admin page
  app.get('/admin', controllers.adminController.index)

  // create new post (GET)
  app.get('/admin/posts/new', controllers.postController.new)
  // edit post (GET)
  app.get('/admin/posts/edit/:id', controllers.postController.edit)


  // add post to db (POST)
  app.post('/posts/create', controllers.postsController.create)

  app.get('/posts/:id', controllers.postsController.show)
  
  // need route to update db entry
  app.post('/posts/:id/edit', controllers.postsController.update)
  // this goes to the confirm deletion page (this will be handled via modal on admin page)
  // app.get('/posts/delete/:id', controllers.postsController.delete)
  // this actually removes it from the database
  app.post('/posts/:id/destroy', controllers.postsController.destroy)
}
