var express = require('express');
var bodyParser = require('body-parser');
var port = process.argv[2];
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.post('/form', function(req, res) {
  res.end(req.body.str.split('').reverse().join(''));
});
app.listen(port);