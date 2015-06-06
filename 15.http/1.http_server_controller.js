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
var url = require('url');
var fs = require('fs');
var booklist = {1:{id:1,name:'node'},
    2:{id:2,name:'js'},
    3:{id:3,name:'node.js'}};
//   请求 / 返回所有的书籍列表
// 请求 /book?id=? 返回对应的书籍信息
var controllers = {
    book:{
        add:function(req,res,id,name){
            res.end('add '+(id+' '+name)+' successfully');
        },
        del:function(req,res,id){
            res.end('del '+id+' successfully');
        }
    }
}
server.on('request',function(req,res){
    var urlObj = url.parse(req.url,true);
    var pathname =urlObj.pathname;
    var paths = pathname.split('/');
    var entity = paths[1];
    var action = paths[2];
    var args = paths.slice(3);
    if(controllers[entity] && controllers[entity][action]){
        controllers[entity][action].apply(null,[req,res].concat(args));
    }
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