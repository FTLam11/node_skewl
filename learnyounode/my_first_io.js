var fs = require('fs');

var buffer = fs.readFileSync(process.argv[2])
var line_count = buffer.toString().split('\n').length - 1

console.log(line_count);