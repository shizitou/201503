/**
 * $('#button').click(fucntion(){
 *    alert('clicked');
 * });
 **/
//加载核心包 样板间
var http = require('http');
//开一家自己的霍营庆丰包子店
var waiter = function(req,res){
    var url = req.url;
    console.log(url);
    res.writeHead(200,{"Content-Type":'text/html;charset=utf-8'})
    var path = url.split('?')[0];
    var query = url.split('?')[1];
    if(path == '/baozi'){
        res.end(query.split('=')[1]+'个包子');
    }else if(path == '/doufu'){
        res.end(query.split('=')[1]+'碗豆腐脑');
    }else{
        res.end('我们没这道菜');
    }


//如何在server中输出用户的 Accept-Encoding信息？
}
var server = http.createServer(waiter);
server.listen(8080);


/**
 * 1xx 请求已经爱理，需要继续处理
 * 2xx 服务器已经接收，正常响应。
 * 3xx 重定向 需要客户端进一步。
 * 4xx 客户端错误
 * 5xx 服务器端错误
 **/