var express = require('express');
var models = require('./db/models');
var path = require('path');
var serveStatic = require('serve-static');
var fs = require('fs');
var index = require('./routes/index');
var user = require('./routes/user');
var article = require('./routes/article');
var bodyParser = require('body-parser');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
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
    saveUninitialized:true,
    store:new MongoStore({
        db:'blog',
        host:'123.57.143.189'
    })
}));
app.use(flash());
app.use(function(req,res,next){
    res.locals.user = req.session.user || '';
    res.locals.error = req.flash('error').toString() || "";
    res.locals.success = req.flash('success').toString() || "";
    next();
});
app.use(function(req,res,next){
    if(models._collections){
        next();
    }else{
        res.end('网站初始化尚未完成，请耐心等待.');
    }
});
app.use('/',index);
app.use('/user',user);
app.use('/article',article);
app.listen(8080);