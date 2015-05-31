/**
 * 默认情况下，子进程 全部退出后父进程才能退出
 *
 */
var chid_process = require('child_process');
var fs = require('fs');
var out = fs.openSync('msg.txt','w');
var p1 = chid_process.spawn('node',['write.js'],{
    detached:true,
    stdio:['ignore',out,'ignore']//stdin stdout stderr
});
p1.unref();