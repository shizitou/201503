var fs = require('fs');
var BUFFER_SIZE = 100000;
function copy(src,dest){
    var readSoFar,fdsrc,fddest,read;
    var buff = new Buffer(BUFFER_SIZE);
    fdsrc = fs.openSync(src,'r');
    fddest = fs.openSync(dest,'w');
    do{
        readSync
        writeSync
    }while(read>0)
    fs.closeSync(fdsrc);
    fs.closeSync(fddest);
}