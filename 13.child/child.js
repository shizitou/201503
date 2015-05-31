var http = require('http');
process.on('message',function(msg,server){
    if(msg ==='server'){
        var httpServer = http.createServer();
        httpServer.on('request',function(req,res){
            if(req.url != "/favicon.ico"){
                console.log('子进程处理');
                res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
                res.end('子进程中处理请求');
            }
        });
        httpServer.listen(server,function(){
            console.log('子进程中的服务器创建成功');
        });
    }
});