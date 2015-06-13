var express = require('express');
var cookieParser = require('cookie-parser');
var sessionParser = require('cookie-session');
var util = require('util');
var app = express();
app.use(cookieParser());
app.use(sessionParser({secret:'test'}));
app.get('/session.html',function(req,res){
    req.session.username = 'zfpx';
    req.session.age = 6;
    res.sendfile('./session.html');
});
app.post('/ses',function(req,res){
    console.log(req.session.username);
    console.log(req.session.age);
    res.end('ok');
});
app.listen(8080);