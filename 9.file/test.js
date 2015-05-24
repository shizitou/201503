var fs = require('fs');
fs.writeFileSync('small.html', new Buffer(1));
var buf = new Buffer(1024*1024*22);
buf.fill(0);
fs.writeFileSync('big.html',buf );
