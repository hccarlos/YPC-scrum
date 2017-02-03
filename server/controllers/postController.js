//Controller template
var path = require("path");
var htmlPath = path.join(__dirname, "./../../client/");
var requireFolder = require("./../config/req_folder.js");
var models = requireFolder("models");

// temporary global variable to test ejs templating
// var posts = [
//       { id:0,
//         title:"test name 1",
//         created_at:"test date 1",
//         text:"yes 1"
//       },
//       { id:1,
//         title:"test name 2",
//         created_at:"test date 2",
//         text:"yes 2"}
//     ];


module.exports = {
  index: function(req, res, navBar){
    models.postModel.index(req,res,function(err, posts, fields){
      console.log("This is err:")
      console.log(err)
      console.log("This is posts:");
      console.log(posts);
      res.render("./views/blog.ejs", {posts:posts, navBar: navBar.navBar});
    });
  },
  create: function(req, res){
    console.log("create post");
    models.postModel.create(req, res, function(err, rows, fields){
      // need validation
      console.log("post created");
    });
    res.redirect("/admin")
  },
  show: function(req, res){
    models.postModel.show(req,res,function(err, post, fields){
      console.log(post);
      res.render("./views/admin/posts/show.ejs", {post:post[0]});
    });
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
