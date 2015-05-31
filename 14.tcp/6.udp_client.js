var util = require('util');
var dgram = require('dgram');
var client = dgram.createSocket('udp4');
client.bind(41235,'192.168.0.109');
var buffer = new Buffer('你好');
/*
buffer, 发送的数据
offset, 偏移量
length, 发送的长度
port, 服务器端口号
address, 服务器地址
callback 回调函数
*/
client.send(buffer,0,buffer.length,41234,'192.168.0.109');
//client.setEncoding('utf8');
client.on('message',function(msg,rinfo){
    console.log(util.inspect(rinfo));
    console.log('接收服务器过来的数据',msg.toString());
});