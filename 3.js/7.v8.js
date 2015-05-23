
var obj = {name:'zfpx',age:5};


console.log(Object.keys(obj));

Object.prototype.email = 'zfpx@126.com';
for(var i in obj){
    if(obj.hasOwnProperty(i))
        console.log(i);
}

console.log(Array.isArray([]));
console.log(typeof []);
console.log(Object.prototype.toString.call([]));

[1,2,3].forEach(function(v){
    console.log(v);
});

var result = [1,2,3].filter(function(v){
    return  v<2;
});
console.log(result);
result = [1,2,3].map(function(v){
    return  v*2;
});
console.log(result);

console.log('  d  '.trim());

Date.prototype.__defineGetter__('ago',function(){
    var diff = (new Date().getTime() - this.getTime());
    return "时间已经过去了"+(diff/1000)+"秒";
});
var a = new Date(new Date().getTime() - 3600*1000);
console.log(a.ago);