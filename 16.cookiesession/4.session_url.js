/**
 * 基于URL实现session
 * @type {*}
 */
var http = require('http');
var url = require('url');
var fs = require('fs');
var SESSION_KEY = 'zfkey';
var sessions = {};
var EXPIRE_TIME = 5*1000;//默认过期时间
function newSession(){
    var sessionObj = {mny:100,expTime:new Date(now+EXPIRE_TIME)};
    var sessionId = new Date().getTime() +"_"+Math.random();//生成一个唯一不重复的sessionID
    sessions[sessionId] =sessionObj;//然后把sessionid和session对像的对应放在了服务器端
    return sessionObj;
}
function changeTo(url){
    //setHeader('Location',url);
    //statusCode = 302
}
var app = http.createServer(function(req,res){
    var urlObj = url.parse(req.url,true);
    req.query = urlObj.query;
    var sessionId = req.query[SESSION_KEY];
    if(!sessionId){//如果sessionID不存在
        var session = newSession();
        //得到我们的URL url.format()
        var newUrl = newUrl(req.url,SESSION_KEY,sessionId);
        changeTo(newUrl);
    }else{

    }
}).listen(8080);

/**
 * 1.实现URL的session
 * 2.实现加密
 **/