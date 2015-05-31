//应用程序当前的运行时间
setInterval(function(){
    console.log(process.uptime());
},3000);
//测试代码的运行时间
var fs = require('fs');
var time = process.hrtime();
var data = fs.readFileSync('readme.md');
var diff = process.hrtime(time);
console.log(diff);//0 是秒 2 纳秒

// node有些时候会抛出一些异常，
process.on('uncaughtException',function(err){
    console.error(err);
});

ddd();