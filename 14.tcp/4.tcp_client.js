/*
   创建tcp服务器
 */
var net = require('net');
var util = require('util');
var socket = new net.Socket({allowHalfOpen:true});
socket.setEncoding('utf8');
socket.connect(8080,'localhost',function(){
    console.log(socket.remoteAddress,socket.remotePort,socket.localAddress,socket.localPort);
    socket.write('你好坏');
    setTimeout(function(){
        socket.end();
    },3000);
});
socket.on('error',function(error){
    console.log('通信错误'+error);
    socket.destroy();
});
socket.on('end',function(){
    console.log('连接关闭');
});
socket.on('data',function(data){
    console.log('接收到服务器的数据',data);
});