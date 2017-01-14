var path = require("path");
var htmlPath = path.join(__dirname, "./../../server/");
var crypto = require('crypto');

var s3 = require('./../../server/config/s3functions.js');
var AWS = require('aws-sdk');


var s3Config = require('./../config/s3-keys.js');

module.exports = {
  index: function(req, res){
    AWS.config.update({ accessKeyId: s3Config.accessKey, secretAccessKey: s3Config.secretKey });
    AWS.config.update({region: s3Config.region});
    var s3sdk = new AWS.S3();
    // var path = "path/to/";
    var params = {Bucket: s3Config.bucket};
    // var req = s3.listObjects(params);
    // console.log(req)
    // req.send();
    s3sdk.listObjects(params, function (err, data) {
      if(err){
        throw err;
      }
      console.log(data);
      res.render("./views/admin/upload/index.ejs", {allFiles : data.Contents});
    });
  },
	credentials: function(request, response){
    // console.log("this function generates credentials");
    if (request.query.filename) {
      // var filename = crypto.randomBytes(16).toString('hex') + path.extname(request.query.filename);
      var filename = request.query.filename;
      filename = path.basename(filename, path.extname(filename)) + " (" + new Date().toISOString() + ")" + path.extname(request.query.filename);
      // console.log(filename);
      // console.log(request.query.filename);
      // console.log(s3Config);
      response.json(s3.s3Credentials(s3Config, {filename: filename, contentType: request.query.content_type}));
    }
    else {
      // console.log("filename is required");
      response.status(400).send('filename is required');
    }
  }

}
