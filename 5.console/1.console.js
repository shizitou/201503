/*
  js 特殊对象叫全局对象 global
   它及其所有的属性都可以在程序任何地方访问
   console process

 */
//向标准输出流输出
console.log('this is log');
console.error('this is error');
//重定向
//把普通日志和错误日志都输出到标准输出，
//node 1.console.js 1>>a.txt 2>&1
//格式化输出
console.log('%s',new Object());//字符串
console.log('%s',{name:'zfpx'});//对象转字符串
console.log("%d",88.99);//数字
console.log('%d','zfpx');//NaN

console.log(eval("1+1"));
console.log(1+1);
var a = 1,b =2;
console.log(a+b);

console.log(a==true);

console.time('time');
//lllllllllllllllll
console.timeEnd('time');
//log warn error
console.log('user:%s 今年 %d岁','zfpx',5);

var course = {name:'zfpx',age:6};
console.log(JSON.stringify(course));
console.log(JSON.parse('{"name":"zfpx","age":6}'));
console.log('%j',course);
console.dir(course);
console.trace('tr');
console.assert(1==2);

