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
var util = require('util');
var fs = require('fs');
var out = fs.createWriteStream('./log.txt');
server.on('request',function(req,res){
    out.write(req.method);
    out.write(req.url);
    out.write(req.httpVersion);
    out.write(util.inspect(req.headers));
    res.end('hello');
});

server.on('close',function(){
    console.log('服务器关闭了');
});

server.on('error',function(err){
    console.error(err);
});

server.listen(8080);