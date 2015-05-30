/**
 * 可以用 writestream对象写入文件
 * fs.createWriteStream()
 *  path,
 *  option
 *      flags 如果是追加，需要设置为 a
 *      start 整数值，代表指定文件开始写入的位置
 **/
var fs = require('fs');
var src = fs.createReadStream('./data.txt');
var dest = fs.createWriteStream('./2.txt');
dest.on('open',function(){
    console.log('写入文件已经打开');
});
src.on('data',function(data){
    var flag = dest.write(data);
    console.log(flag);
});

src.on('end',function(){
    dest.end('再见',function(){
        console.log('文件全部写入完毕');
        console.log('共写入了%d字节的数据',dest.bytesWritten);
    });
});
