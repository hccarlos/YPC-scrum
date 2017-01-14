//Controller template
var path = require("path");
var htmlPath = path.join(__dirname, "./../../server/");
var requireFolder = require("./../config/req_folder.js");
var models = requireFolder("models");

// app.get('/user', controllers.userController.index)
// app.post('/user/edit/:id', controllers.userController.update)


// temporary global variable to test ejs templating
var user = {
    id: 1,
    email: "hi",
    first: "hi",
    last: "hi",
    phone: "hi",
    position: "hi",
    company: "hi",
    street: "hi",
    city: "hi", 
    state: "hi",
    zip: "hi",
    treasury: false,
    membership: true,
    events: false,
    corporate: true,
    volunteer: true
  };


module.exports = {
  index: function(req, res){
    // console.log("controller function called successfully");
    // var result = models.model_template.test(req, res);
    // console.log(result);
    res.render("./views/users/edit.ejs", {user:user});
  },
  update: function(req, res){
    console.log("\n\n\n EDIT")
    console.log(req.body);
    // valid session id with req.params.id
    // validation for database update
    // update database
    // redirect to index
    res.redirect("/user");
  },
}
