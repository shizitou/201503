var zlib = require('zlib');
var fs = require('fs');
var http = require('http');
var request = http.get({
    host:'localhost',
    path:'/',
    port:8080,
    headers:{'accept-encoding':'gzip,deflate'}
});
request.on('response',function(res){
    var out = fs.createWriteStream('./test3.txt');
    console.log(res.headers['content-encoding']);
    switch (res.headers['content-encoding']){
        case 'gzip':
            res.pipe(zlib.createGunzip()).pipe(out);
            break;
        case 'deflate':
            res.pipe(zlib.createInflate()).pipe(out);
            break;
        default:
             res.pipe(out);
            break;
    }
});