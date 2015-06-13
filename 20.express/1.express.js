/**
 * express
 * npm install express
 */

var express = require('express');
var app = express();
app.get('/coffee',function(req,res,mext){
   res.setHeader('Content-Type',"text/html;charset=utf-8");
    mext();
})
app.get('/coffee',function(req,res,mext){
    res.coffee = '加水';
    mext();
})
app.all('/coffee',function(req,res,mext){
    res.coffee += ' 加咖啡';
    mext();
})
/*app.get('/coffee',function(req,res,mext){
    res.coffee += ' 加牛奶';
    mext();
})*/
app.get('/coffee',function(req,res,mext){
   res.end(res.coffee);
})
app.listen(8080);

