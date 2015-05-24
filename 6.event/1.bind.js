/**
 * call apply bind
 */

var person = {
    name:'zfpx',
    say:function(words){
        console.log(this.name+" say "+words );
    }
}
person.say('hello');
var p = {name:'tom'};
person.say.call(p,'hello');
//bind 永久绑定上下文
//func.bind(this,args)
//它返回绑定后的函数
var newSay = person.say.bind(p,'newhello');
newSay('hello');//tom say newhello
newSay.call(person,'new2hello');//tom say newhello
