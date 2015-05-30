var fs = require('fs');
var util = require('util');
var stream = require('stream');

function ZfReadStream(){
    stream.Readable.call(this);
}
util.inherits(ZfReadStream,stream.Readable);

ZfReadStream.prototype._read = function(){
    this.push('hello');
    this.push(null);
}

var zfReadStream = new ZfReadStream()
zfReadStream.on('data',function(data){
    console.log(data.toString());
}).on('end',function(){
    console.log('end');
});