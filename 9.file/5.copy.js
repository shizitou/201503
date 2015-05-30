var fs = require('fs');
var BUFFER_SIZE = 1;
function copy(src, dest) {
    var readSoFar = 0, fdsrc, fddest, read;
    var buff = new Buffer(BUFFER_SIZE);
    fdsrc = fs.openSync(src, 'r');
    fddest = fs.openSync(dest, 'w');
    do {
        read = fs.readSync(fdsrc, buff, 0, BUFFER_SIZE, readSoFar);
        fs.writeSync(fddest, buff, 0, read);
        readSoFar += read;
    } while (read > 0)
    fs.closeSync(fdsrc);
    fs.closeSync(fddest);
}
function copy2(src, dest) {
    var readSoFar = 0, fdSrc, fdDest, read;
    var BUFFER_SIZE = 1;
    var buf = new Buffer(BUFFER_SIZE);
    var fdSrc = fs.openSync(src,'r');
    var fdDest = fs.openSync(dest,'w');
    var read = fs.readSync(fdSrc, buf, 0, BUFFER_SIZE, readSoFar);

    function copyBlock(offset) {
        if (read > 0) {
            if (!offset) {
                fs.writeSync(fdDest, buf, 0, read);
            } else {
                fs.writeSync(fdDest, buf, offset, read);
            }
            read -= BUFFER_SIZE;
            if (read > 0) {
                copyBlock(read);
            }
        }
    }

    copyBlock();
}
copy2('./test2.txt', './test3.txt');

function move(src, dest) {
    var readSoFar = 0, fdsrc, fddest, read;
    var buff = new Buffer(BUFFER_SIZE);
    fdsrc = fs.openSync(src, 'r');
    fddest = fs.openSync(dest, 'w');
    do {
        read = fs.readSync(fdsrc, buff, 0, BUFFER_SIZE, readSoFar);
        fs.writeSync(fddest, buff, 0, read);
        readSoFar += read;
    } while (read > 0)
    fs.closeSync(fdsrc);
    fs.closeSync(fddest);
    fs.unlinkSync(src);
}

//move('./test.txt','./test2.txt');