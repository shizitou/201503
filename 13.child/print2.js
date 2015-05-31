var fs = require('fs');
var out= fs.createWriteStream('./msg.txt');
process.stdin.on('data',function(data){
    out.write(data);
});