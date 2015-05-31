var http = require('http');
var options ={
    hostname:'localhost',
    port:8080,
    path:'/',
    method:'GET'
}
for(var i=0;i<30;i++){
    var req = http.request(options,function(res){
        res.on('data',function(chunk){
            console.log(chunk.toString());
        })
    });
    req.end();
}