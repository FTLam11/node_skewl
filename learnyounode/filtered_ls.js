var fs = require('fs');
var path = require('path');
var directory = process.argv[2];
var extension = '.' + process.argv[3];

fs.readdir(directory, function(err, list) {
  if (err) return console.log(err);
  list.forEach(function(file) {
    if (path.extname(file) === extension) console.log(file);
  });
});