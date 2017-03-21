var fs = require('fs');
var path = require('path');

module.exports = function(directory, extension, cb) {
  fs.readdir(directory, function(err, data) {
    if (err) return cb(err);
    matchedFiles = data.filter(function(file) {
      return path.extname(file) === '.' + extension;
    });
    cb(null, matchedFiles);
  });
};