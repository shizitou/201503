/**
 * 父子进程共享 http服务器的对象，监听 8080端口。
 * 共享 后，当服务器收到 请求后会自动分给一个空闲的进程，执行
 * 该进程 中的事件回调函数
 **/
var chid_process = require('child_process');
var net = require('net');
var fs = require('fs');
var child = chid_process.fork(__dirname+'/child.js');
var server = net.createServer();
var http = require('http');
server.listen(8080,function(){
    child.send('server',server);
    console.log('父进程中的服务器创建成功');
    var httpServer = http.createServer();
    httpServer.on('request',function(req,res){
        if(req.url != "/favicon.ico"){
            console.log('父进程处理');
            res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
            res.end('父进程中处理请求');
        }
    });
    httpServer.listen(server);
});