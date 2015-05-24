var person = require('./person');

var p1 = new person('杨过');
var p2 = new person('小龙女');

console.log(p1.GetName());//杨过
console.log(p2.GetName());//小龙女

console.log(p1._name);
p1.__proto__._name = '侠侣';
var util = require('util');
console.log(p1._name);//_name=侠侣
console.log(p2._name);//_name=侠侣

console.log(p1.__proto__._name === p1._name);

