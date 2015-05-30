var fs = require('fs');
var util = require('util');
var stream = require('stream');

function Tranformer(){
    stream.Transform.call(this);
}
util.inherits(Tranformer,stream.Transform);
Tranformer.prototype._transform = function(chunk, encoding, cb) {
    for(var i=0;i<chunk.length;i++){
        chunk[i] = 255 - chunk[i];
    }
    this.push(chunk);
    this.push(null);
};
var c = new Tranformer();
fs.createReadStream('./22.txt').pipe(c)
    .pipe(fs.createWriteStream('222.txt'));
