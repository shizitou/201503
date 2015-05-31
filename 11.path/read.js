var fs = require('fs');
var path = require('path');
var content = fs.readFileSync(path.join(__dirname,'msg.txt'));
console.log(content);