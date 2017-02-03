// postModel.js

//require these two things to be able to do queries
var connection = require('../config/mysql.js');
var doQuery = require('../config/doquery_function.js');
//the doQuery function is available. it takes a string which is the query, and an optional callback function
//the callback function takes one argument, rows. it is an array returned from a successful query.
//the callback function is only called when the query is successful.
//the purpose of the callback function is to enable you to modify the results of the query.
//this is usually not necessary so 99% of the time you shouldn't need a callback at all.

module.exports = {
  // get all posts
  index: function(req, res, callback){
    console.log("index model function");
    //you can make a query by calling your callback, which you write in the controller.
    doQuery(`select * from posts`, callback);
  },
  // show a single post
  show: function(req, res, callback){
    var test = `select * from posts where posts.id = ${req.params.id}`;
    doQuery(test, callback);
  },
  // create a new post
  create: function(req, res, callback){
    console.log(req.body);
    doQuery("insert into posts (title, body, created_at, updated_at) values ('"+ req.body.title + "', '" + req.body.text + "', now(), now())", callback);
  },
  // edit a post
  edit: function(req, res, callback){
    var test = `update users set email="${req.body.email}", first_name="${req.body.first_name}", last_name="${req.body.last_name}", phone="${req.body.phone}", position="${req.body.position}", company="${req.body.company}", street="${req.body.street}", city="${req.body.city}", state="${req.body.state}", zipcode="${req.body.zipcode}" where users.id ="${req.session.data.userid}"`;
    console.log(test);
    doQuery(test, callback);
  },
  // delete a post
  delete: function(req, res, callback){
    var test = `update users set email="${req.body.email}", first_name="${req.body.first_name}", last_name="${req.body.last_name}", phone="${req.body.phone}", position="${req.body.position}", company="${req.body.company}", street="${req.body.street}", city="${req.body.city}", state="${req.body.state}", zipcode="${req.body.zipcode}" where users.id ="${req.session.data.userid}"`;
    console.log(test);
    doQuery(test, callback);
  },
}


/*

app.post('/posts/:id/destroy', controllers.adminController.destroy)
app.post('/posts/create', controllers.postController.create)
app.post('/posts/:id/edit', controllers.postController.update)

*/