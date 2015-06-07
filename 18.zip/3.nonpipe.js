var zlib = require('zlib');
var fs = require('fs');
var out = fs.createWriteStream('result.log');
zlib.gzip('testme',function(err,buff){
    console.log(buff.toString());
    zlib.unzip(buff,function(err,buff2){
        console.log(buff2.toString());
    })
});