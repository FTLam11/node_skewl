var trumpet = require('trumpet')();
var through = require('through2');
var loud = trumpet.select('.loud').createStream();

loud.pipe(through(function(chunk, _, next) {
    this.push(chunk.toString().toUpperCase());
    next();
  })).pipe(loud);

process.stdin.pipe(trumpet).pipe(process.stdout);