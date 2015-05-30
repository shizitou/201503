/**
 * watch 观看观察
 * 监视文件或目录的变化 。
 * fs.watchFile
 *  filename
 **/
var fs = require('fs');
var func1 = function(curr,prev){
    if(Date.parse(prev.ctime)==0){
        console.log('刚刚创建 ');
    }else if(Date.parse(curr.ctime) ==0){
        console.log('已经删除  ');
    }else{
        console.log('修改了');
    }
}
fs.watchFile('zf.txt',{interval: 10, persistent: true},func1)
function func2(curr,prev){
    console.log('current size is '+curr.size);
}
fs.watchFile('zf.txt',{interval: 10, persistent: true},func2)

setTimeout(function(){
    fs.unwatchFile('zf.txt',func2);
},3000)