var http = require('http');
var uRL = require('url');
var port = process.argv[2];

var getTime = function(time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  };
};

var server = http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  var urlObject = uRL.parse(req.url, true); 
  var route = urlObject.pathname;
  var date = new Date(urlObject.query.iso);
  var time = {};

  if (route === '/api/parsetime') {
    var timeArr = date.toLocaleTimeString('en-US', { hour12: false }).match(/(\d{2})/g);
    time.hour = Number(timeArr[0]);
    time.minute = Number(timeArr[1]);
    time.second = Number(timeArr[2]);
  } else if (route === '/api/unixtime') {
    time.unixtime = date.getTime();
  } else return res.end('Unauthorized route');

  res.end(JSON.stringify(time));
});

server.listen(port);
