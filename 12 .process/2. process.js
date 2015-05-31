/**
 *在操作系统里，每个应用程序都是一个进程 类的实例。
 * 可在任何模块中访问
 */

process.stdin.on('data',function(chunk){
    process.stdout.write(chunk);
});
process.argv.forEach(function(val,index,array){
    console.log(index+":"+val);
});
