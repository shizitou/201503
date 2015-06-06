/**
 * 获取content-type
 */
var http = require('http');
var path = require('path');
var server = http.createServer();
var util = require('util');
var fs = require('fs');
var url = require('url');
var mime = require('mime');
var querystring = require('querystring');
server.on('request', function (req, res) {
    var urlObj = url.parse(req.url,true);
    var pathname = urlObj.pathname;
    var fileName = __dirname+pathname;
    console.log(fileName);
    console.log(path.resolve(__dirname,pathname));
    console.log(path.join(__dirname,pathname));
    fs.exists(fileName,function(exists){
        if(exists){
            res.writeHead(200,{'Content-Type':mime.lookup(fileName)});
            fs.createReadStream(fileName).pipe(res);
        }else{
           res.statusCode =  404;
            res.end('文件不存在');
        }
    })
});


server.listen(8080);