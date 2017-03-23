var http = require('http');
var port = process.argv[2];

var server = http.createServer(function(req, res) {
  if (req.method != 'POST') return res.end('POSTS only');
  var payload = '';
  req.on('data', function(chunk) {
    payload += chunk;
  });
  req.on('end', function() {
    res.end(payload.toUpperCase());
  });
});

server.listen(port);