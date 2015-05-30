var fs = require('fs');
var util = require('util');
var stream = require('stream');

function ZfDuplex(){
    stream.Duplex.call(this);
}
util.inherits(ZfDuplex,stream.Duplex);
ZfDuplex.prototype._write = function(chunk, encoding, cb){
    for(var i=0;i<chunk.length;i++){
        chunk[i] = chunk[i]++;
    }
    this.push("ddd");
    cb();
}

ZfDuplex.prototype._read = function(){
    this.push(null);
}

var zfDuplex = new ZfDuplex();

fs.createReadStream('./2.txt').pipe(zfDuplex)
.pipe(fs.createWriteStream('22.txt'));