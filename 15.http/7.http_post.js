/**
 * 如何获取客户端的post数据
 */
var http = require('http');

var server = http.createServer();
var util = require('util');
var fs = require('fs');
var path = require('path');
var url = require('url');
var formidable = require('formidable');
var querystring = require('querystring');
server.on('request', function (req, res) {
    var urlObj = url.parse(req.url,true);
    var pathname = urlObj.pathname;
    if(pathname == '/'){//表示表单
    fs.createReadStream('./form.html').pipe(res);
    }else if(pathname == '/post'){ //接收表体数据
      req.pipe(fs.createWriteStream('./formdata.txt'));
    res.end('hello');
    }else{
        res.end('404');
    }
});

server.on('close', function () {
    console.log('服务器关闭了');
});

server.on('error', function (err) {
    console.error(err);
});

server.listen(8080);