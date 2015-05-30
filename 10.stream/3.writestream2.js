

var fs = require('fs');
var out = fs.createWriteStream('./test.txt');
for(var i=0;i<10000;i++){
    var flag = out.write(i+"");
    console.log(flag);
}
out.on('drain',function(){
    console.log('小桶已干');
});

var src = fs.createReadStream('./data.txt');
var dest = fs.createWriteStream('./2.txt');
src.pipe(dest);