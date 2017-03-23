var http = require('http');
var responses = [];
var responseCount = 0;

var print = function(collection) {
  for (var i = 0; i < collection.length; i++) {
    console.log(collection[i]);
  };
};

var get = function(url, queueNum) {
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
      responses[queueNum] = payload;
      responseCount += 1;

      if (responseCount === 3) print(responses);
    });
  })
  .on('error', function(err) {
    console.log(err);
  });
};

for (var i = 2; i < process.argv.length; i++) {
  get(process.argv[i], i - 2);
};