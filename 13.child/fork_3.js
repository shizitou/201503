/**
 *
 **/
var chid_process = require('child_process');
var net = require('net');
var fs = require('fs');
var child = chid_process.fork(__dirname+'/sharesocket.js');
var server = net.createServer();
server.on('connection',function(socket){
    if(new Date().getTime()%2 ==0){
        child.send('socket',socket);
    }else{
        socket.end('主进程处理');
    }
});
server.listen(8888,'localhost');