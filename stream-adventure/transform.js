function toUpper(chunk) {
  return chunk.toString().toUpperCase();
};

process.stdin
  .on('readable', function() {
    var chunk = process.stdin.read();
    if (chunk) process.stdout.write(toUpper(chunk));
  })