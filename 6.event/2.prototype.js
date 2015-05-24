/**
 * js是面向对象的语言，只有对象
 * 原型链
 * 原型和构造函数生成象
 * 1.构造函数内定义的属性继承方式不同。
 * 2.构造函数的任何属性和函数都会被重复创建
 * 3.构造函数内定义的函数运行时有闭包的开销。
 */
function Person(){
    //this.name = '';
    //this.say = function(){}
}
Person.prototype.name = 'zfpx';
Person.prototype.showName = function(){
    console.log(this.name);
}
var person = new Person();
person.showName();//
person.name = 'zfpx';
Person.prototype.name = 'zfpx2';
person.showName();//

function Animal(name,food){
    this.food = food;
    this.name = name;
    this.getName = function(){
        return this.name;
    }
}
Animal.prototype.food = 'meat';
Animal.prototype.eat = function(){
    console.log('I am eating '+this.food);
}
var tiger = new Animal('tiger');
var mouse = new Animal('mouse','rice');
console.log(tiger.getName ==mouse.getName);
console.log(tiger.eat ==mouse.eat);//true
console.log(tiger.getName());//tiger
tiger.eat();//I am eating undefined
mouse.eat();//I am eating rice

//原型链
/*
  js特殊对象Object Function. 构造函数，用于生成对象
  Object.prototype 它是所有对象的祖先
  Function.prototype是所有函数的祖先
  js对象有三类
  1.用户创建对象 new出来的
  2.构造函数 它有一个 prototype指向自己的原型对象
  创建对象时，被 创建对象的__proto__会指向构造函数的pro
  prototype属性
 原型对象有一个constructor指向自己的构造函数
 3.原型对象
  这三类对象都有__proto__属性，指向该 对象的原型，任何一人都
  可以遍历到Object.prototype上。
 */
function Dog(){

}
Object.prototype.name = 'zfpx';
Dog.prototype.name = 'dog';
var d = new Object();
var dog = new Dog();
console.log(d.name);//zfpx
console.log(dog.name);//dog
console.log(dog.__proto__.name);//dog
console.log(dog.__proto__.__proto__.name);//zfpx
console.log(dog.__proto__.constructor.prototype.name);//dog
