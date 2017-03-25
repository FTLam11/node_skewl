var express = require('express');
var stylus = require('stylus');
var app = express();
var port = process.argv[2];
var assets_path = process.argv[3];

app.use(express.static(assets_path) || path.join(__dirname, 'public'));
app.use(stylus.middleware(assets_path));
app.listen(port);