var express = require('express');
var port = process.argv[2];
var templates_path = process.argv[3];
var app = express();

app.set('view engine', 'pug');
app.set('views', templates_path);
app.get('/home', function(req, res) {
  res.render('index', { date: new Date().toDateString() });
});
app.listen(port);