var http = require('http');
var url = require('url');
var qString = require('querystring');
var crypto = require('crypto');
var SESSION_KEY = 'LIONKEY';
var sessions = {};
var EXPIRE_TIME = 5 * 1000; //默认过期时间
function newSession(ip) {
    var curTime = new Date().getTime();
    var sessionObj = {
        say: 'helloLion',
        expTime: new Date(curTime + EXPIRE_TIME)
    };
    //生成一个唯一不重复的sessionID, md5
    var id = ''+curTime+Math.random();
    var md5 = crypto.createHash('md5');
    md5.update(id+"|"+ip+"|secret");
    var sessionId = id+"_"+md5.digest('hex');
    //然后把sessionid和session对像的对应放在了服务器端
    sessions[sessionId] = sessionObj;
    return sessionId;
}
function checkSession(sessionId,ip){
    var result = false;
    var sessionInfo;
    if(sessionId){
        var vals = sessionId.split('_');
        if(vals.length==2){
            var md5 = crypto.createHash('md5');
            md5.update(vals[0]+"|"+ip+"|secret");
            if(vals[1] == md5.digest('hex')){
                if(sessionInfo = sessions[sessionId])
                    if(sessionInfo.expTime > new Date().getTime())
                        result = true;
            }
        }

    }

    return result;
}
http.createServer(function(req, res) {
    if(req.url==='/favicon.ico'){
        res.end('');
        return ;
    }
    var ip = req.headers['x-forwarded-for'];
    var urlObj = url.parse(req.url, true);
    var queryObj = urlObj.query;
    var sessionId = queryObj[SESSION_KEY];
    //如果sessionID不存在 或者 SEEIONID不合法
    if (checkSession(sessionId,ip)) {
        res.end(JSON.stringify(sessions[sessionId]));
    } else {
        sessionId = newSession(ip);
        //制造一个新的url
        queryObj[SESSION_KEY] = sessionId;
        var newUrl = urlObj.pathname + '?' + qString.stringify(queryObj);
        //重定向到新URL
        res.setHeader('Location', newUrl);
        res.statusCode = 302;
        res.end('ok');
    }
}).listen(8080);