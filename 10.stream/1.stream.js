/**
 *  readFile writeFile把文件做为一个整体
 *  有些时候我们并不关心文件的具体内容，只关心是否能读到数据
 *  以及读到数据后我们应该如何处理，这时可以流
 *  流是一组有序的，有起点和终点的字节传输数据手段
 *
 *  流有两种模式，有流动模式和非流动模式
 *
 */
var fs = require('fs');
/**
 * path 文件路径
 * options 选项
 *  start 从文件的哪个字节开始读
 *  end  读到哪个索引结束
 *  autoClose 是否自动关闭
 */
//var file  = fs.createReadStream('./data.txt',{start:3,end:11,autoClose:true});//包括结束位置
/*file.on('open',function(){
    console.log('文件打开了');
});

file.on('data',function(data){
    console.log('data='+data);
});
file.on('end',function(){
    console.log('读取完毕');
})

file.on('close',function(){
    console.log('文件关闭');
})
file.on('error',function(error){
    console.log('出错'+error);
})*/
//file.pause();
//file.on('data',function(data){
//    console.log(data);
//});
//setTimeout(function(){
//    file.resume();
//},5000)
var file  = fs.createReadStream('./data.txt');//包括结束位置
var arr = [];
file.on('readable',function(){
    console.log('===============readable=======');
    var data;
    while(null != (data = file.read(1))){
        arr.push(data);
    }
});
file.on('end',function(){
    var b = Buffer.concat(arr);
   // console.log(b.toString());
});