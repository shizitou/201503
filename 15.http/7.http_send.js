/**
 * 其它属性
 */
var http = require('http');

var server = http.createServer();
var util = require('util');
var fs = require('fs');
var url = require('url');
var querystring = require('querystring');
server.on('request', function (req, res) {
    var urlObj = url.parse(req.url,true);
    var pathname = urlObj.pathname;
    if(pathname != '/favicon.ico'){
        res.setHeader('name','zfpx');
        console.log(res.headersSent);
        res.setHeader('Content-Type','text/html;charset=utf8');
        res.statusCode = 200;
        console.log(res.headersSent);
        res.sendDate = false;
        res.setHeader('Access-Control-Allow-Origin','http://localhost*');
        console.log(res.getHeader('Access-Control-Allow-Origin'));
        res.write('hello');
        console.log(res.headersSent);

        res.end('world');
    }
});


server.listen(8080);