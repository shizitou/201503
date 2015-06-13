/**
 * 静态文件服务
 * @type {*}
 */
var express = require('express');
var app = express();
app.use(express.static(__dirname));
app.get('/book/:id/:name',function(req,res){
    //res.send('hello');
    //res.sendStatus(404);
    //res.sendFile(__dirname+'/1.txt');
    //res.sendfile('./1.txt');
    res.send(req.params.id+' '+req.params.name);
});
app.listen(8080);

