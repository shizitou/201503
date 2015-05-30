var fs = require('fs');
var util = require('util');
var stream = require('stream');

function ZfWriteStream(){
    stream.Writable.call(this);
}
util.inherits(ZfWriteStream,stream.Writable);
ZfWriteStream.prototype._write = function(chunk, encoding, cb){
console.log(chunk.toString());
    cb();
}
var zfWriteStream = new ZfWriteStream();
zfWriteStream.write('珠峰','utf8',function(){
    console.log('写入成功');
});
