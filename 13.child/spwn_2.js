/**
 * ipc 是父进程 和子进程 之间创建一个IPC通道
 * 通道 关闭时会触发子进程的disconnect事件
 */
var chid_process = require('child_process');
//cwd 指定工作目录
var p1 = chid_process.spawn('node',['print1.js','zfpx'],{cwd:'./print',stdio:['ipc','pipe','pipe']});

var p2 = chid_process.spawn('node',['print2.js'],{stdio:['ipc','pipe','pipe']})

//code 退出代码，正常退出为0，错误错出为nul
//singal是信号，是字符串，父进程 发信号给子进程 退出，时参数为父进程 发给子进程的信号名称
p1.on('exit',function(code,signal){
    console.log('p1退出'+code,signal);
    p2.kill('SIGINT');
});
p2.on('exit',function(code,signal){
    console.log('p2退出'+code,signal);
});
//如果子进程 开启失败，会触发 error事件
p1.on('error',function(err){
    console.log('子进程开启失败'+err);
});

p1.on('disconnect',function(){
    console.log('ipc1的通道关闭');
});