var express = require('express');
var path = require('path');
var port = process.argv[2];
var index = process.argv[3];
var app = express();

app.use(express.static(index) || path.join(__dirname, 'public'));
app.listen(port);