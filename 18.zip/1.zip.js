

var zlib = require('zlib');
var fs = require('fs');

var gzip = zlib.createGzip();
var fa = zlib.createDeflate();
var rs = fs.createReadStream('./a.txt');
/*
var out = fs.createWriteStream('a.txt.gz');
rs.pipe(gzip).pipe(out);
var out2 = fs.createWriteStream('a.txt.fa');
rs.pipe(fa).pipe(out2);
*/

fs.stat('a.txt',function(err,stat){
    console.log(stat.size);
    fs.stat('a.txt.gz',function(err,stat2){
        console.log(stat2.size);
        fs.stat('a.txt.fa',function(err,stat3){
            console.log(stat3.size);
        })
    })
})



/*
var gunzip = zlib.createGunzip();
var rs2 = fs.createReadStream('./a.txt.gz');
var out2 = fs.createWriteStream('./a2.txt');
rs2.pipe(gunzip).pipe(out2);
*/
