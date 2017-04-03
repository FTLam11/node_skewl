var combine = require('stream-combiner');
var split = require('split');
var through = require('through2');
var zlib = require('zlib');

module.exports = function() {
  var current;

  function bookList(genre) {
    return {
      name: genre,
      books: []
    }
  };

  function transform(chunk, _, next) {
    if (!chunk) return next();
    var lineJSON = JSON.parse(chunk);
    if (lineJSON.type == 'genre') {
      if (current) this.push(JSON.stringify(current) + '\n');
      current = bookList(lineJSON.name);
    } else {
      current.books.push(lineJSON.name);
    };
    next();
  };

  function flush(next) {
    if (current) this.push(JSON.stringify(current) + '\n');
    next();
  };

  return combine(
    split(),
    through.obj(transform, flush),
    zlib.createGzip()
  );
};