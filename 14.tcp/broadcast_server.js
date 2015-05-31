

var dgram = require('dgram');
var server = dgram.createSocket('udp4');
server.on('message',function(msg,rinfo){
    server.setBroadcast(true);
    var buf = new Buffer('确认信息'+msg);
    server.send(buf,0,buf.length,41235,'192.168.0.255');
});

server.bind(41234,'192.168.0.109');