var text = '';

process.stdin
  .setEncoding('utf8')
  .on('readable', function() {
    var chunk = process.stdin.read();
    if (!chunk) return;
    text += chunk;
  })
  .on('end', function() {
    process.stdout.write(text.split('').reverse().join(''));
  })