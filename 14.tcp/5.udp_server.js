
/**
 * 资源消耗少 处理速度快
 * udp = datagram
 **/

var dgram = require('dgram');
var util = require('util');
//createSocket可能创建一个实现UDP通信的socket对象

var server = dgram.createSocket('udp4',function(msg,rinfo){
    console.log('received '+msg);
    console.log(rinfo.port,rinfo.address);
    server.send(new Buffer(msg),0,6,41235,'192.168.0.109');
});
server.bind(41234,'192.168.0.109');