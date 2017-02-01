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
      var document = new Content(req.body)
      document.content = {}
      for (each in req.body) {
        if ( each != 'type' ) {
          console.log("each:", each, req.body[each])
          document.content[each] = req.body[each]
        }

      }

      console.log("new document: \n" + document)
      document.save(function(err, content) {
        if (err) {
          console.log("\n\n\n\n!!!!!!!!!!!!!!!!!\n" + err)
        } else {
          console.log("\n\n\n\n!!!!\n"+content)
          res.redirect('/admin/content#executives')
        }
      })

      console.log(Content.find({type:'executive'}));
    }
  }
