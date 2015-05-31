

var net = require('net');
var util = require('util');
var fs = require('fs');
var out = fs.createWriteStream('./msg4.txt');
var server = net.createServer(function(socket){
    console.log('connected');
    socket.setEncoding('utf8');
    var rs =  fs.createReadStream('./msg3.txt')
    rs.on('data',function(data){
        var flag = socket.write(data);
        console.log('返回值 是'+flag);
        console.log('缓存了%d字符',socket.bufferSize);
    });
    socket.on('data',function(data){
        console.log('received %d 字节',socket.bytesRead);
    });
    socket.on('drain',function(){
        console.log('缓存区中的数据发送完毕');
    });
});


server.listen(8080, function () {
    console.log('server started at ' + util.inspect(server.address()));
});