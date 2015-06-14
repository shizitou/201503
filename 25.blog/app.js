var express = require('express');
var path = require('path');
var fs = require('fs');
var app = express();
//设置模板文件的存放路径
app.set('views',path.resolve(__dirname,'views'));
app.set('view engine','html');//设置模板引擎
app.engine('html',require('ejs').renderFile);//对模板调用ejs来进行解析
app.get('/',function(req,res){
    res.render('index');
});
app.listen(8080);