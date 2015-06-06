/**
 * HTTP hypertext transfer protocal
 * 1xx 信息响应，表示接收到请错误求并继续片
 * 2xx 处理成功响应 表示动作被接收，理解和处理。
 * 3xx 重定向 为了完成响应，要求客户端进行进一步处理。
 * 4xx 客户端错误  客户端语法错误或请求
 * 5xx 服务器错误 服务器不能正常处理
 *
 */
/**
 * <scheme>://<user>:<password>@<host>:<port>/<path>;<params>?<query>#<frag
 * 协议         用户名 密码        服务器IP 端口   路径             查询字符串 锚点
 */
var http = require('http');
//req 读流对象 IncoingMessage
// res 写流对象 ServerResponse
var server = http.createServer();
var booklist = {1:{id:1,name:'node'},
    2:{id:2,name:'js'},
    3:{id:3,name:'node.js'}};
//   请求 / 返回所有的书籍列表
// 请求 /book?id=? 返回对应的书籍信息
server.on('request',function(req,res){
    var url = req.url;
    if(url == '/'){ // /  返回所有的书籍
        var result = '';
        for(var attr in booklist){
            result+= (booklist[attr].name)+",";
        }
        res.end(result);
    }else if(url =='/book'){ // /book?id=2
        res.end();
    }
});

server.on('connection',function(socket){
    socket.on('close',function(){
        console.log('客户端close');
    });
    socket.on('end',function(){
        console.log('客户端end');
    });
    console.log('一个新的连接建立了');
});

server.on('close',function(){
    console.log('服务器关闭了');
});
/*server.setTimeout(30000,function(){
    console.log('连接已超时');
});*/
server.on('error',function(err){
    console.error(err);
});

server.listen(8080);