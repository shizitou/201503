var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
var fs = require('fs');
var app = express();
//设置模板文件的存放路径
//app.set 第一个参数是系统指定名称，不能随意改变

app.set('views',path.resolve(__dirname,'views'));
app.set('view engine','html');//设置模板引擎
app.engine('html',require('ejs').renderFile);//对模板调用ejs来进行解析
app.use(serveStatic(path.resolve(__dirname,'public')));
app.get('/',function(req,res){
    res.render('index');//渲染模板
});
app.get('/user/reg',function(req,res){
    res.render('user/reg');//渲染模板
});
app.listen(8080);