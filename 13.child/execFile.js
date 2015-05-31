/**
 * 可以开启一个专用于运行某个可执行文件子进程
 *
 **/

var child_process = require('child_process');
child_process.execFile('print.bat',['zfpx'],{cwd:'./print'},function(err,stdout,stderr){
    if(err){
        console.error(err);
    }else{
        console.log('子进程print1输出'+stdout.toString());
    }

});