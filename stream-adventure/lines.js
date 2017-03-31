var lineNum = 1;

function normalizeText(chunk, lineNum) {
  return (lineNum % 2 == 0) ? chunk.toUpperCase() : chunk.toLowerCase();
};

process.stdin
  .setEncoding('utf8')
  .on('readable', function() {
    var chunk = process.stdin.read();
    if (!chunk) return;
    process.stdout.write(normalizeText(chunk, lineNum));
    lineNum++;
  })