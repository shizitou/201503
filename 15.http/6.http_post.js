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
       var form = new formidable.IncomingForm();
        form.parse(req,function(err,fields,files){
            if(err){
                res.writeHead(500);
                res.end(err.toString());
            }else{
                res.writeHead(200);
                console.log(files.avatar);
                var type = path.extname(files.avatar.type);
                var fileName = './upload/'+new Date().getTime()+Math.random()+type;
                console.log(fileName);
                fs.createReadStream(files.avatar.path).pipe(fs.createWriteStream(fileName));
                res.end(util.format('fields:%s,files:%s',JSON.stringify(fields),JSON.stringify(files)));

            }
        });
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