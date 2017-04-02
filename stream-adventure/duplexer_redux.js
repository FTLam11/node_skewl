var duplex = require('duplexer2');
var through = require('through2');

module.exports = function(counter) {
  var countryTally = {};

  function transform(chunk, _, next) {
    countryTally[chunk.country] = (countryTally[chunk.country] || 0) + 1;
    next(); 
  };

  function flush() {
    counter.setCounts(countryTally);
  };
  
  return duplex({writableObjectMode:true}, through.obj(transform, flush), counter);
};
