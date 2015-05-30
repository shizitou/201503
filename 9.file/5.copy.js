var fs = require('fs');
var BUFFER_SIZE = 1;
function copy(src,dest){
    var readSoFar=0,fdsrc,fddest,read;
    var buff = new Buffer(BUFFER_SIZE);
    fdsrc = fs.openSync(src,'r');
    fddest = fs.openSync(dest,'w');
    do{
        read =fs.readSync(fdsrc,buff,0,BUFFER_SIZE,readSoFar);
        fs.writeSync(fddest,buff,0,read);
        readSoFar+=read;
    }while(read>0)
    fs.closeSync(fdsrc);
    fs.closeSync(fddest);
}
//copy('./test.txt','./test2.txt');

function move(src,dest){
    var readSoFar=0,fdsrc,fddest,read;
    var buff = new Buffer(BUFFER_SIZE);
    fdsrc = fs.openSync(src,'r');
    fddest = fs.openSync(dest,'w');
    do{
        read =fs.readSync(fdsrc,buff,0,BUFFER_SIZE,readSoFar);
        fs.writeSync(fddest,buff,0,read);
        readSoFar+=read;
    }while(read>0)
    fs.closeSync(fdsrc);
    fs.closeSync(fddest);
    fs.unlinkSync(src);
}

move('./test.txt','./test2.txt');