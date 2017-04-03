var tar = require('tar');
var zlib = require('zlib');
var crypto = require('crypto');
var parser = tar.Parse();
var cipher = process.argv[2];
var passphrase = process.argv[3];

parser.on('entry', function(e) {
  if (e.type !== 'File') return;
  var encryptStream = crypto.createHash('md5', { encoding: 'hex' });

  e.pipe(encryptStream)
    .on('data', function(chunk) {
      console.log(chunk + ' ' + e.path);
    })
});

process.stdin
  .pipe(crypto.createDecipher(cipher, passphrase))
  .pipe(zlib.createGunzip())
  .pipe(parser)