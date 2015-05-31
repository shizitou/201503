/**
 *
 */

var net = require('net');
var util = require('util');
var fs = require('fs');
var out = fs.createWriteStream('./msg.txt');
var server = net.createServer(function (socket) {
    console.log(util.inspect(socket.address()));
    server.getConnections(function(err,count){
        console.log('已经有个'+count+'连接了');
    });
    socket.setEncoding('utf8');
    socket.on('data',function(chunk){
        //console.log(chunk);
        console.log('已经接收到了%d个字节',socket.bytesRead);
        socket.write(chunk);
    });
    socket.pipe(out,{end:false});
    socket.on('end',function(){
        out.end('end');
        server.unref();
        console.log('客户端关闭了连接');
    });
    setTimeout(function(){
        socket.unpipe(out);
    },5000);
    socket.on('error',function(err){
        console.log(err.code);
        socket.destroy();
    });
});
server.on('close',function(){
    console.log('server closed');
});
server.on('err',function(err){
    console.log('server err'+err);
});
server.listen(8080, function () {
    console.log('server started at ' + util.inspect(server.address()));
});