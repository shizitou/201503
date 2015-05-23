/**
 * process
 * 全局对象
 * 全局变量的宿主。
 * 1.全局变量的属性
 * 2.隐式定义的变量
 */
global.name = 'zfpx';
console.log(name);
//age = 6;
console.log(global.age);

/**
 * process 就是一个全局变量，global对象的属性
 * 当前的进程
 *
 **/
//标准输出流
console.log('hello');
process.stdout.write('hello');
process.stdin.on('data',function(data){
    process.stdout.write(data);
})
