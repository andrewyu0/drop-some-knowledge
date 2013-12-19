// DO NOT DELETE this is reference for building file-uploader. Used to develop file-uploader functionality in Sprockit

// libraries that I need for file-uploader/index.js
// var fs = require('fs'),
//     aws = require('aws-sdk'),
//     moment = require('moment'),
//     path = require('path'),
//     imagemagick = require('imagemagick');

StorySchema.statics.attachFile = function (query, docs, callback) {

  var tmpPath = docs.path;
  var tmpName = docs.name;
  var storyId = query;
  var user = docs.user;

  //console.log("Model ID:", this.model.findOneAndUpdate)
  // initializing connection to S3, and time stamp (moment)
  var s3 = new aws.S3();
  var m = new moment();
  var unixTimestamp = m.format("X");
  //readFile
  // tmpPath is coming from readFile so just read it as 'path'
  fs.readFile(tmpPath, function (err, data) {
    if (err) {
      throw err;
    }

    // Get file extension
    
    //path.extname("fdfssd.jpg") // '.jpg'
    var ext = tmpName.split('.');
    var type = ext[ext.length - 1];
    var name = ext.splice(0,ext.length - 2).join('');
    var filename = unixTimestamp + '-' + storyId + '.' + type;
    var fileNameSmall = unixTimestamp + '-' + storyId + '-thumb.' + type;
    var validImageTypes = ['jpg', 'png', 'gif'];

    // If image write thumbnail back to S3
    if (validImageTypes.indexOf(type.toLowerCase()) > -1) {
      im.resize({
        srcData: data,
        width: 256
      }, function (err, stdout, stderr) {
        if (err) throw err

        // Write the file to disk

        fs.writeFileSync('tmp/kittens-resized.' + type, stdout, 'binary');

        // Write Origin Object S3
        s3.client.putObject({
          Bucket: 'sprockit',
          Key: fileNameSmall,
          Body: fs.readFileSync('tmp/kittens-resized.' + type),
          ContentType: 'Image'
        }, function (err, response) {
          //console.log("Thumbnail Uploaded.")
          // Delete the resized thumbnail
          fs.unlinkSync('tmp/kittens-resized.' + type);
        });
      });
    } else {
      fileNameSmall = "";
    }

    // Write Origin Object S3
    s3.client.putObject({
      Bucket: 'sprockit',
      Key: filename,
      Body: data
    }, function (err, response) {
      if (err) throw err
      // Delete the origin file
      fs.unlinkSync(tmpPath);
      // Update the model with the attachment
      //console.log("Story ID Last: ", storyId);
      this.findByIdAndUpdate(storyId, {
        $push: {
          attachments: {
            filename: tmpName,
            name: name,
            path: filename,
            thumbnail: fileNameSmall,
            type: type,
            user: user
          }
        }
      }, callback);
    }.bind(this));
  }.bind(this));
};