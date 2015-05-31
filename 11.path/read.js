var fs = require('fs');
var path = require('path');
process.chdir('../');
var content = fs.readFileSync(path.join(process.cwd(),'msg.txt'));
console.log(content);