/**
 * 创建HTTP客户端
 */
var http = require('http');
var options = {
    host:'www.baidu.com',
    port:'80',
    path:'/'
}
var req = http.get(options,function(res){
    console.log(res.statusCode);
    console.log(JSON.stringify(res.headers));
    res.setEncoding('utf8');
    var bufData = [];
    res.on('data',function(chunk){
        //14613
        console.log(chunk);
        //bufData.push(chunk);
    });
    res.on('end',function(){
       //var buf =  Buffer.concat(bufData);
        //console.log(buf.length);
    });
});
req.setTimeout(1000,function(){
    req.abort();
});
req.on('error',function(err){
    console.log(err);
});
req.end();

