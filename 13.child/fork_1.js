/**
 * fork是开启一个专门运行node.js模块的子进程
 *  modulePath 指定模块路径和文件名
 *  args 数组，运行参数
 *  options
 *    cwd
 *    env
 *    encoding
 *    silent
 * 1)fork方法时，子进程所有的输入 输出操作完毕后，子进程不会自动退出，必须 调用process.exit方法
 * 2)父子之间可以通过send on Message进行消息交互
 * 3)父子进程共享 输入输出
 **/
var chid_process = require('child_process');
var p = chid_process.fork(__dirname+'/fork.js');
p.send({name:'zfpx'});
p.on('message',function(m){
    console.log('父进程接收到消息'+JSON.stringify(m));
});