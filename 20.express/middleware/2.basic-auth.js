var express = require('express');
var basicAuth = require('basic-auth');
var util = require('util');
var app = express();
var ba = function(req,res,next){
    function unAuth(res){
        res.set('WWW-Authenticate','Basic realm=Authorization Required');
        return res.send(401);
    }
    var user = basicAuth(req);
    if(!user || !user.name || !user.pass){
        return unAuth(res);
    }
    if(user.name=='zfpx' && user.pass =='123456'){
        next();
    }else{
        unAuth(res);
    }
}
app.use(ba);
app.get('/',function(req,res){
    res.writeHead(200);
    res.end('hello');
});
app.listen(8081);