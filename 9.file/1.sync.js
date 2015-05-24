/**
 * 在node.js中，使用fs来实现文件和目录的创建，写入和删除
 * 在fs中，所有的操作都有同步和异步两种实现
 *  方法名为有sync后缀的都是同步方法，否则都是异步方法
 */

var fs = require('fs');
/**
 * 同步读取方法
 */
var data = fs.readFileSync('./index.html','utf8');
/*
console.log(data);
console.log('over');
*/

/**
 * 异步方法
 *
 */
fs.readFile('./index.html',function(err,data){
    console.log(data);
    console.log(data[2].toString());
})

//31 32 33 0d 0a 34 35 36
// 1 2  3  \r \n 4 5 6
//16*3+3=51



fs.readFile('./index.html',function(err,data){
    console.log(data);
    console.log(data[2].toString());
})




fs.readFile('./big.html',function(err,data){
    if(err)
     throw Error('不得了了，饭店失火了');
    console.log('big over');
})

fs.readFile('./small.html',function(err,data){
    console.log('small over');
})

console.log('over');