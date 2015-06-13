/**
 * 模板
 * @type {*}
 */
var express = require('express');
var app = express();
var path = require('path');
app.use(express.static(__dirname));
app.set('view engine','html');//指明模板引擎
app.engine('.html',require('ejs').__express);
app.set('views',path.join(__dirname,'view'));//模板文件的存放位置
app.get('/',function(req,res){
    res.render('index',{name:'zfpx',hello:'<h1>hello</h1>'});
});
app.get('/user',function(req,res){
    res.render('user',{name:'zfpx',hello:'<h1>hello</h1>'});
});
app.listen(8080);

