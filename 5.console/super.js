var http = require('http');
//开一家自己的霍营庆丰包子店
var waiter = function(req,res){
    res.end('hello3');
}
var server = http.createServer(waiter);
server.listen(8081,function(){
    console.log('server started');
});
