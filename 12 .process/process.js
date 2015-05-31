/**
 *在操作系统里，每个应用程序都是一个进程 类的实例。
 * 可在任何模块中访问
 */

//console.log(process);

//stdout: [Getter],fd 1
//stderr: [Getter],fd 2
//stdin: [Getter], 0
var fs = require('fs');
/*fs.write(2,new Buffer('虎妈猫爸'),0,6,0,function(err,bytesWritten,buffer){
    //console.log('bytesWritten '+bytesWritten);
});*/
setInterval(function(){
    var buff=new Buffer(12);
    fs.read(0,buff,0,6,0,function(err,bytesRead,buffer){
        console.log(buff.slice(0,bytesRead).toString());
    });
},1000)


/*
process.stdin.on('data',function(data){
    console.log('data '+data);
});*/
