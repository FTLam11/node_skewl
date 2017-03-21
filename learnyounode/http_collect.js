var http = require('http');
var url = process.argv[2];

http.get(url, function(res) {
  var payload = '';
  res.setEncoding('utf8');
  res.on('data', function(data) {
    payload += data;
  });
  res.on('error', function(err) {
    console.log(err);
  });
  res.on('end', function() {
    console.log(payload.length);
    console.log(payload);
  });
});