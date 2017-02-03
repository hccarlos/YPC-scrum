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
  // GET: show all blog posts on a page
  index: function(req, res, navBar){
    models.postModel.index(req,res,function(err, posts, fields){
      console.log("This is err:")
      console.log(err)
      console.log("This is posts:");
      console.log(posts);
      res.render("./views/blog.ejs", {posts:posts, navBar: navBar.navBar});
    });
  },
  // POST: create a new post
  create: function(req, res){
    console.log("create post");
    models.postModel.create(req, res, function(err, rows, fields){
      // need validation
      console.log("post created");
    });
    res.redirect("/admin")
  },
  // GET: show a single blog post (update styling)
  show: function(req, res, navBar){
    models.postModel.show(req,res,function(err, post, fields){
      if(post.length==0){res.redirect("/");}
      console.log("this is post",post);
      res.render("./views/post.ejs", {post:post[0], navBar: navBar.navBar});
    });
  },
  // POST: update an existing blog post
  update: function(req, res){
    console.log("create post");
    models.postModel.edit(req, res, function(err, post, fields){
      console.log("post updated");
      // need validation
    });
    res.redirect("/admin")
  },
  // POST: destroy an existing blog post
  destroy: function(req, res){
    console.log("destroy post");
    models.postModel.delete(req, res, function(err, post, fields){
      console.log("post deleted");
      // need validation
    });
    res.redirect("/admin")
  }
}
