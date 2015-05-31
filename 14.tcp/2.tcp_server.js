

var net = require('net');
var util = require('util');
var fs = require('fs');
var out = fs.createWriteStream('./msg3.txt');
var server = net.createServer(function (socket) {
    socket.setTimeout(10*1000);//设置超时时间

    socket.pause();

    socket.on('timeout',function(){
        socket.resume();
        socket.pipe(out,{end:false});
    });

    socket.on('data',function(data){
        socket.pause();
    });

});

server.listen(8080, function () {
    console.log('server started at ' + util.inspect(server.address()));
});