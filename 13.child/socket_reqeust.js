var net = require('net');
for(var i=0;i<30;i++){
    var client = new net.Socket();
    client.setEncoding('utf8');
    client.connect(8888,'localhost',function(){
        console.log('connected');
    })
    client.on('data',function(data){
        console.log(data);
    });
}