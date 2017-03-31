var http = require('http');
var options = {
  hostname: 'localhost',
  port: 8099,
  method: 'POST'
};

process.stdin.pipe(http.request(options, function(res) {
  res.pipe(process.stdout);
}));