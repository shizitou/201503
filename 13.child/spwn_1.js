/**
 * spawn(spɔn) 用于开启一个用于运行某个命令的子进程
 *  command 要执行的命令
 *  args 要执行参数
 *  options 对象
 *   cwd 当前工作目录
 *   stdio 字符串或三个元素的数组 用来设置子进程 输入输出
 *     pipe  父子进程之间建立管道
 */
var chid_process = require('child_process');
//cwd 指定工作目录
var p1 = chid_process.spawn('node',['print1.js','zfpx'],{cwd:'./print'});

var p2 = chid_process.spawn('node',['print2.js'],{stdio:'pipe'})

p1.stdout.on('data',function(data){
    p2.stdin.write(data);
});
//code 退出代码，正常退出为0，错误错出为nul
//singal是信号，是字符串，父进程 发信号给子进程 退出，时参数为父进程 发给子进程的信号名称
p1.on('exit',function(code,signal){
    console.log('p1退出'+code,signal);
    p2.kill();
});
p2.on('exit',function(code,signal){
    console.log('p2退出'+code,signal);
});
//如果子进程 开启失败，会触发 error事件
p1.on('error',function(err){
    console.log('子进程开启失败'+err);
});