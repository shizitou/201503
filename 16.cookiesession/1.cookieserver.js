var http = require('http');
 var url = require('url');
var util = require('util');
http.createServer(function(req,res){
    var urlObj = url.parse(req.url,true);
    var pathname = urlObj.pathname;
    var querystring = require('querystring');
    var q = require('./q');
    if('/favicon.ico' == pathname){
        res.writeHead(404);
        res.end(http.STATUS_CODES[404]);
    }else if('/write' == pathname){
        res.writeHead(200,
            {"Content-Type":"text/html",
            "Set-Cookie":[q.serialize('name','zfpx',{
                maxAge:'60', //以秒为单位的
               // httpOnly:true,
                domain:'localhost'
            }),q.serialize('age','6',{path:'/read',
                expires:new Date(new Date().getTime()+60000)
            })]});
        res.end('ok');
    }else if('/read' == pathname){
        var cookie = req.headers.cookie;
        if(cookie){
            var cookieObj = querystring.parse(cookie,'; ','=');
            res.end(JSON.stringify(cookieObj));
        }else{
            res.end('no cookie');
        }

    }else if('/read/read' == pathname){
        var cookie = req.headers.cookie;
        if(cookie){
            var cookieObj = querystring.parse(cookie,'; ','=');
            res.end(JSON.stringify(cookieObj));
        }else{
            res.end('no cookie');
        }

    }
}).listen(8080);