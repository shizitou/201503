var util = require('util');
function Parent(){
    this.name = 'father';
    this.age = 6;
    this.say = function(){
        console.log('hello '+ this.name);}
}
Parent.prototype.showName = function(){
    console.log(this.name);
}
function Child(){
    this.name = 'child';
}
util.inherits(Child,Parent);
var p = new Parent();
p.showName();
p.say();
console.log(p);

var c = new Child();
c.showName();
//c.say();

function Person(){
    this.name = {name:{name:'zfpx'}};
    this.toString = function(){
        return this.name;
    }
}
var p = new Person();
console.log(util.inspect(p,true,2,true));

console.log(util.isArray([]));
console.log(util.isRegExp('/ddd/'));
console.log(util.isDate(new Date));
console.log(util.isError(new Error));