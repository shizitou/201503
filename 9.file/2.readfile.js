/**
 * 可以用readfile读取文件
 * encoding
 * flag
 *  r read 读
 *  w write 写会覆盖以前的内容
 *  a append  追加
 *
 */

var fs = require('fs');
fs.readFile('./index.html',{encoding:'utf8',flag:'r'},function(err,data){
    if(err)
        console.error('读取文件错误');
    else
        console.log(data);
});


var data = fs.readFileSync('./index.html',{encoding:'utf8',flag:'r'});
console.log(data);