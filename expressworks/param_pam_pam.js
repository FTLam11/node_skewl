var express = require('express');
var crypto = require('crypto');
var port = process.argv[2];
var app = express();
var hash = function(id) {
  return crypto
    .createHash('sha1')
    .update(new Date().toDateString() + id)
    .digest('hex')
};

app.param('id', function(req, res, next, id) {
  req.id = id;
  next();
});

app.put('/message/:id', function(req, res) {
  res.end(hash(req.id));
});
app.listen(port);