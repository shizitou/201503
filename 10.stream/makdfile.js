var fs = require('fs');
fs.writeFile('./data.txt',new Buffer(1024*128+1));
