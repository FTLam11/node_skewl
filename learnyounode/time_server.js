var net = require('net');  
var server = net.createServer(function(socket) {
  timestamp = new Date()
  date = timestamp.toISOString()
    .match(/\d{4}-\d{2}-\d{2}/);
  time = timestamp.toLocaleTimeString('en-US', { hour12: false})
    .match(/\b\d{2}:\d{2}/);
  socket.end(date + ' ' + time + '\n');
});
  
server.listen(process.argv[2]);