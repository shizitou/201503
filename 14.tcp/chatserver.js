/**
 * 1.创建服务器
 * 2.客户端连接
 * 3.统计当前的连接数
 * 4.接收用户的聊天信息
 * 5.当用户进入或退出时提示大家
 **/
 var net = require('net');
 var util = require('util');
 var clients = {};
 var count =0;
var server = net.createServer(function(socket){
    var nickname;
    socket.write('欢迎光临，请设置用户名\r\n');
    socket.on('data',function(chunk){
        if(nickname){
            broadcast(null,nickname+":"+chunk);
        }else{
            if(clients[nickname]){
                socket.write('用户名已经被占用，请重新输入');
            }else{
                nickname = chunk;
                clients[nickname] = socket;
                broadcast(nickname,"SYSTEM:"+nickname+"来到了聊天室.");
                count++;
            }
        }
    });
    //end
    socket.on('close',function(){
        count --;
        delete clients[nickname];
        socket.destroy();
        broadcast(nickname,"SYSTEM:"+nickname+"离开了聊天室");
    });

    socket.on('error',function(err){
        console.log(err);
    });
});
server.listen(8080,function(){
    console.log('server started at 8080');
});
server.on('error',function(err){
    console.log(err);
});
function broadcast(nickname,msg){
    msg +='\r\n>';
    for(var name in clients){
        if(name != nickname){
            clients[name].write(msg);
        }
    }
}