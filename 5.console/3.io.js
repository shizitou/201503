
var fs = require('fs');
fs.readFile('./a.txt',function(err,data){
    console.log(data.toString());
})
console.log('read over');
var content  = fs.readFileSync('./a.txt');
console.log(content.toString());
console.log('read  222 over');