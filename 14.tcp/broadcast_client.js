var util = require('util');
var dgram = require('dgram');
var client = dgram.createSocket('udp4');
client.bind(41235,'192.168.0.109');
var buffer = new Buffer('hello world');
client.send(buffer,0,buffer.length,41234,'192.168.0.109');
client.on('message',function(msg,rinfo){
    console.log(util.inspect(rinfo));
    console.log('接收服务器过来的数据',msg.toString());
});