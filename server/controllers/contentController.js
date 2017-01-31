//Controller template
var path = require("path");
var mongoose = require('mongoose');
var Content = mongoose.model('Content');
var htmlPath = path.join(__dirname, "./../../server/");
var requireFolder = require("./../config/req_folder.js");
var models = requireFolder("models");

  module.exports = {
    create: function(req, res){
      console.log(req.body)
      // Content.create(req.body, function(err, content) {
      //   if (err) {
      //     console.log("\n\n\n\n!!!!!!!!!!!!!!!!!\n" + err)
      //   }
      // })
      res.redirect('/admin/content#executives')
    }
  }
