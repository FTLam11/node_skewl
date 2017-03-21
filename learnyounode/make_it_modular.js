var reader = require('./reader');
var directory = process.argv[2];
var extension = process.argv[3];
var cb = function(err, list) {
  if (err) return console.log(err);
  list.forEach(function(file) {
    console.log(file);
  });
};

reader(directory, extension, cb);