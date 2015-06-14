var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
var fs = require('fs');
var index = require('./routes/index');
var user = require('./routes/user');
var article = require('./routes/article');
var bodyParser = require('body-parser');
var session = require('express-session');
var flash = require('connect-flash');
var app = express();
//设置模板文件的存放路径
//app.set 第一个参数是系统指定名称，不能随意改变

app.set('views',path.resolve(__dirname,'views'));
app.set('view engine','html');//设置模板引擎
app.engine('html',require('ejs').renderFile);//对模板调用ejs来进行解析
app.use(serveStatic(path.resolve(__dirname,'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(session({
    secret:'zfblog',
    resave:true,
    saveUninitialized:true
}));
app.use(flash());
app.use(function(req,res,next){
    res.locals.error = req.flash('error').toString() || "";
    next();
});
app.use('/',index);
app.use('/user',user);
app.use('/article',article);
app.listen(8080);