var http = require('http');
var url = require('url');
var SESSION_KEY = 'zfkey';//和客户端约定好的会话key
var querystring = require('querystring');
var session = {};//存放客户端的session
var EXPIRE_TIME = 5*1000;//默认过期时间
http.createServer(function(req,res){
    var urlObj = url.parse(req.url,true);
    var pathname = urlObj.pathname;
    var now = new Date().getTime();//得到当前时间
    if('/favicon.ico' == pathname){
        res.writeHead(404);
        res.end(http.STATUS_CODES[404]);
    }else{
        //得到cookie对象
        var cookieObj = querystring.parse(req.headers.cookie,'; ','=');
        if(cookieObj[SESSION_KEY]){
            var sessionId = cookieObj[SESSION_KEY];
            var sessionObj = session[sessionId];
            if(!sessionObj || !(sessionObj.expTime) || sessionObj.expTime.getTime()<now){
                var sessionObj = {mny:100,expTime:new Date(now+EXPIRE_TIME)};
                var sessionId = now +"_"+Math.random();//生成一个唯一不重复的sessionID
                session[sessionId] =sessionObj;//然后把sessionid和session对像的对应放在了服务器端
                res.writeHead(200,{"Content-Type":"text/html;charset=utf-8",'Set-Cookie': SESSION_KEY +'='+sessionId+';max-age:'+EXPIRE_TIME});
                res.end('欢迎老朋友，但你的卡已经到期了，换张新卡给你，新卡余额是'+sessionObj.mny);
            }else{
                sessionObj.expTime = new Date(now +EXPIRE_TIME);
                sessionObj.mny = sessionObj.mny - 10;
                res.writeHead(200,{"Content-Type":"text/html;charset=utf-8",'Set-Cookie': SESSION_KEY +'='+sessionId+';max-age:'+EXPIRE_TIME});
                res.end('欢迎老朋友，卡余额是'+sessionObj.mny);
            }
        }else{
            //生成新的session对象，有余额和过期时间两个属性
            var sessionObj = {mny:100,expTime:new Date(now+EXPIRE_TIME)};
            var sessionId = now +"_"+Math.random();//生成一个唯一不重复的sessionID
            session[sessionId] =sessionObj;//然后把sessionid和session对像的对应放在了服务器端
            res.writeHead(200,{"Content-Type":"text/html;charset=utf-8",'Set-Cookie': SESSION_KEY +'='+sessionId+';max-age:'+EXPIRE_TIME});
            res.end('欢迎新朋友，卡余额是'+sessionObj.mny);
        }
    }
}).listen(8080);