var express = require('express');
var cookieParser = require('cookie-parser');
var util = require('util');
var app = express();
app.use(cookieParser());
app.get('/write',function(req,res){
    res.sendFile(__dirname+'/cookie.html');
});
app.post('/read',function(req,res){
    res.writeHead(200);
    for(var attr in req.cookies){
        res.write(attr+"="+req.cookies[attr]+"<br/>");
    }
    res.end('');
});
app.listen(8080);