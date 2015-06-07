var zlib = require('zlib');
var fs = require('fs');
var http = require('http');
//accept-encoding:gzip, deflate, sdch
http.createServer(function(req,res){
    var rs = fs.createReadStream('./a.txt');
    var acceptEncoding = req.headers['accept-encoding'];
    if(acceptEncoding){
        if(acceptEncoding.match(/\bdeflate\b/)){
            res.writeHead(200,{'content-encoding':'deflate'});
            rs.pipe(zlib.createDeflate()).pipe(res);
        } else   if(acceptEncoding.match(/\bgzip\b/)){
            res.writeHead(200,{'content-encoding':'gzip'});
        }else{
            rs.pipe(res);
        }
    }else{
        rs.pipe(res);
    }

}).listen(8080);