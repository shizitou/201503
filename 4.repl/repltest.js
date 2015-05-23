var repl = require('repl');
var server = repl.start({});
var context = server.context;
context.age = 6;
context.grow = function(num){
    return context.age + num;
}

/*var obj = {name:1,age:2};
with(obj){
    console.log(this.name);
}*/
