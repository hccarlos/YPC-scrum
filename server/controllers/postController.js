//Controller template
var path = require("path");
var htmlPath = path.join(__dirname, "./../../client/");
var requireFolder = require("./../config/req_folder.js");
var models = requireFolder("models");

// temporary global variable to test ejs templating
var posts = [
      { id:0,
        title:"test name 1",
        created_at:"test date 1",
        text:"yes 1"
      },
      { id:1,
        title:"test name 2",
        created_at:"test date 2",
        text:"yes 2"}
    ];


module.exports = {
  index: function(req, res){
    // console.log("controller function called successfully");
    // var result = models.model_template.test(req, res);
    // console.log(result);
    res.render("./partials/admin.ejs", {posts:posts});
  },
  new: function(req, res){
    // take user to create a new blog post page
    res.render("./partials/posts/create.ejs");
  },
  create: function(req, res){
    // adding to db
  },
  show: function(req, res){
    // temporary global variable posts
    var post=posts[req.params.id];
    res.render("./partials/posts/show.ejs", {post:post});
  },
  edit: function(req, res){
    // temporary global variable posts
    var post=posts[req.params.id];
    res.render("./partials/posts/edit.ejs", {post:post});    
  },
  update: function(req, res){
  },
  delete: function(req, res){
    // temporary global variable posts
    var post=posts[req.params.id];
    res.render("./partials/posts/delete.ejs", {post:post});
  },
  destroy: function(req, res){
    // delete from db
  }
}
