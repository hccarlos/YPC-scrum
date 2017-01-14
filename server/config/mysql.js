var mysql = require('mysql');
var bcrypt = require("bcryptjs");
var crypto = require("crypto");
var connection = mysql.createConnection({
    port     : 8889,
    host     : "localhost",
    user     : "root",
    password : "root",
    database : "YPCdb"
});

connection.connect(function(err) {
  if(err) throw err
  console.log("you are now connected")

  connection.query('INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)', ['John', 'Doe', 'john@doe.com', 'password1'], function(err, result) {
    if(err) throw err
      connection.query('SELECT * FROM users', function(err, results){
        console.log(results[0].first_name)
        console.log(results[0].last_name)
        console.log(results[0].email)
        console.log(results[0].password)
      })
    })
})
module.exports = connection;
