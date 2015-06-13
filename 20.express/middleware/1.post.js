
var express = require('express');
var app = express();
var querystring = require('querystring');
var bodyParser = require('body-parser',{extended:true});
var multer = require('multer');
var rawBody = require('raw-body');
app.use(function(req,res,next){
    console.log(req.headers['content-length']);
    rawBody(req,
        {length:req.headers['content-length'],limit:'1mb'}
    ,function(err,string){
            if(err){
                console.error(err);
                return next(err);
            }
            req.text = string;
            next();
        }
    );
});
app.use(bodyParser.json());
app.use(multer({ dest: './uploads/'}))
app.use(bodyParser.urlencoded({extends:false}));

app.get('/',function(req,res){
    res.sendfile('./index.html');
});
/**
 * 1. req.query
 */
app.post('/:name/:age1',function(req,res){
    console.log(req.params.name);
    console.log(req.query.name);
    console.log(req.body.name);
    //params>body>query
    console.log(req.param('name'));
    console.log(req.param('age1'));
    console.log(req.param('age2'));
    console.log(req.param('age3'));
    /*var postData='';
    req.on('data',function(data){
        postData+=data;
    });
    req.on('end',function(){
        var dataObj = querystring.parse(postData.toString());
        res.end(JSON.stringify(dataObj));
    });*/
    //console.log(req.files.avatar);
    res.end(JSON.stringify(req.query)+JSON.stringify(req.body));
}).listen(8080);