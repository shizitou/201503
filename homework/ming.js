var fs = require('fs');
var EventEmitter = require('events').EventEmitter;
var util = require('util');

function ReadLine(path) {
    this.path = path;
    this.RETURN = 0x0d;
    // this.NEWLINE = 0x0a;
    this.bufferArr = [];
}
util.inherits(ReadLine, EventEmitter);
ReadLine.prototype.on('newListener', function (eName) {
    //读取开始
    eName === 'line' && this._readContent();
});
ReadLine.prototype._readContent = function () {
    var self = this;
    fs.open(self.path, 'r', function (err, fd) {
        var tmpBuffer = new Buffer(1);
        var index = 0;
        (function read() {
            fs.read(fd, tmpBuffer, 0, 1, index, function (err, bytes) {
                if (bytes) {
                    index++;
                    if (tmpBuffer[0] === self.RETURN) {
                        //特定的win系统操作
                        index++;
                        self._emitLine();
                    } else {
                        self.bufferArr.push(new Buffer(tmpBuffer));
                    }
                    read();
                } else {
                    self._emitEnd();
                }
            });
        })()
    });
}
ReadLine.prototype._emitLine = function () {
    this.bufferArr.length &&
    this.emit('line', this._concatBuffer());
}
ReadLine.prototype._emitEnd = function () {
    this._emitLine();
    this.emit('end');
}
ReadLine.prototype._concatBuffer = function () {
    var bufArr = this.bufferArr,
        concatBuf;
    //将单个字节合并在一起
    concatBuf = new Buffer(bufArr.length);
    for (var i = 0; i < bufArr.length; i++) {
        //buffer的合并
        bufArr[i].copy(concatBuf, i);
    }
    this.bufferArr = [];
    return concatBuf;
}

var rl = new ReadLine('test.txt');
rl.on('line', function (data) {
    console.log('line: ', data.toString());
}).on('end', function () {
    console.log('读取完毕');
});