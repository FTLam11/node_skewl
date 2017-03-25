var express = require('express');
var fs = require('fs');
var app = express();
var port = process.argv[2];
var file = process.argv[3];

app.get('/books', function(req, res) {
  fs.readFile(file, function(err, contents) {
    if (err) return res.sendStatus(500);
    return res.json(JSON.parse(contents));
  });
});
app.listen(port);