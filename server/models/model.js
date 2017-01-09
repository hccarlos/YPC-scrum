let mysql = require('mysql');
let bcrypt = require("bcryptjs");
let crypto = require("crypto");
let connection = mysql.createConnection({
    port     : 8889,
    host     : "localhost",
    user     : "root",
    password : "root",
    database : "YPCdb"
});

module.exports = {}