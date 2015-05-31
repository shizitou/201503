/**
 * spawn的区别 spawn可以实时接收子进程 数据，异步方法
 * exec父进程必须 等待子进程 执行完毕后才可以接收数据，是同步方法
 * @type {*}
 */
var child_process = require('child_process');
var p2 = child_process.exec('node print2.js',function(err,stdout,stderr){
    console.log('子进程print2输出'+stdout.toString());
});

child_process.exec('node print1.js',{cwd:'./print'},function(err,stdout,stderr){
    console.log('子进程print1输出'+stdout.toString());
    p2.stdin.write('我是print1输出给你的');
});