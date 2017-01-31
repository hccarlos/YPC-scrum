//Controller template
var path = require("path");
var mongoose = require('mongoose');
var Content = mongoose.model('Content');
var htmlPath = path.join(__dirname, "./../../server/");
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
    res.render("./views/admin/index.ejs", {posts:posts});
  },
  new: function(req, res){
    // take user to create a new blog post page
    res.render("./views/admin/posts/create.ejs");
  },
  // show: function(req, res){
  //   // temporary global variable posts
  //   var post=posts[req.params.id];
  //   console.log("\n\n\n")
  //   console.log(htmlPath)
  //   res.render("./views/admin/posts/show.ejs", {post:post});
  // },
  edit: function(req, res){
    console.log("\n\n\n EDIT")
    // temporary global variable posts
    var post=posts[req.params.id];
    res.render("./views/admin/posts/edit.ejs", {post:post});
  },
  delete: function(req, res){
    // temporary global variable posts
    var post=posts[req.params.id];
    res.render("./views/admin/posts/delete.ejs", {post:post});
  },
  destroy: function(req, res){
    // delete from db
  },
  editContent: function(req, res) {
    res.render("./views/admin/content.ejs", {
      executives: Content.find({ type: 'executive' })
    })
  }
}
