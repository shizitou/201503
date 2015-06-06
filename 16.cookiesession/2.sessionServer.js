var http = require('http');
var url = require('url');
var SESSION_KEY = 'zfkey';
var querystring = require('querystring');
var session = {};
var EXPIRE_TIME = 5*1000;
http.createServer(function(req,res){
    var urlObj = url.parse(req.url,true);
    var pathname = urlObj.pathname;
    var now = new Date().getTime();
    if('/favicon.ico' == pathname){
        res.writeHead(404);
        res.end(http.STATUS_CODES[404]);
    }else{
        var cookieObj = querystring.parse(cookie,'; ','=');
        if(cookieObj[SESSION_KEY]){

        }else{
            var sessionObj = {mny:100,extTime:new Date(now+EXPIRE_TIME)};
            var sessionId = now +"_"+Math.random();
            session[sessionId] =sessionObj;
            res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})
        }
    }
});