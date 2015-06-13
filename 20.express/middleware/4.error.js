var express = require('express');
//var errorHandler = require('errorhandler');
var util = require('util');
var app = express();

app.get('/',function(req,res,next){
console.log('1');
    next('err');
});
app.get('/',function(req,res,next){
    console.log('2');
    next();

});
app.get('/',function(req,res,next){
    console.log('3');
    next();
    res.end('end');
});
app.use(function(err,req,res,next){
    console.log('error');
    res.end(err);
});
app.listen(8080);