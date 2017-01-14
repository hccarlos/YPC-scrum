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

	//registration page
  // ??? WHY DO WE HAVE 2 OF THESE ???
	app.get('/registration', controllers.registrationController.regPage);
  app.post('/newuser', controllers.registrationController.newUser);


  // SHOW POST
  app.get('/posts/:id', controllers.postController.show)

  // need route to update db entry
  app.post('/posts/:id/edit', controllers.postController.update)
  // this goes to the confirm deletion page (this will be handled via modal on admin page)
  // app.get('/posts/delete/:id', controllers.postsController.delete)
  // this actually removes it from the database
  app.post('/posts/:id/destroy', controllers.postController.destroy)

  // ADMIN ONLY FUNCTIONS:
    // GET REQUESTS ARE HANDLED BY ADMIN CONTROLLER
    app.get('/admin', controllers.adminController.index)
    app.get('/admin/posts/new', controllers.adminController.new)
    app.get('/admin/posts/:id/edit', controllers.adminController.edit)
    // POST REQUESTS ARE HANDLED BY THEIR NATIVE CONTROLLERS
    app.post('/posts/:id/destroy', controllers.adminController.destroy)
    app.post('/posts/create', controllers.postController.create)
    app.post('/posts/:id/edit', controllers.postController.update)

    app.get('/s3_credentials', controllers.uploadController.credentials)
    app.get('/upload', controllers.uploadController.index)


    // user functions
    app.get('/user', controllers.userController.index)
    app.post('/user/edit/:id', controllers.userController.update, function(req, res){
      console.log(req.body);
      console.log(req.params.test);
    });


  // these were from a merge commit. keeping here for posterity
  // app.get('/posts/:id', controllers.postController.show)
  //
  // // need route to update db entry
  // app.post('/posts/:id/edit', controllers.postController.update)
  // // this goes to the confirm deletion page (this will be handled via modal on admin page)
  // // app.get('/posts/delete/:id', controllers.postsController.delete)
  // // this actually removes it from the database
  // app.post('/posts/:id/destroy', controllers.postController.destroy)
  //
	// //user submits registration form
	// app.post('/newuser', controllers.registrationController.newUser);
}
