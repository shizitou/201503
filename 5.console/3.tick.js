/**
 * 事件和事件环
 * IO密集型 不适合计算密集型
 * 任何时间只有一个进程
 */
/**
 * 银行
 * 同时来了二个客人
 * 1 存一万，全是一毛的。
 * 2 存1000万
 **/
/*
exec();
function exec(){

    console.log('存一千万');
    var i=0;
    while(i++ < 10){
        console.log('2块 ');
    }
    process.nextTick(function(){
        save();
    });
}
function save(){
    var i=0;
    while(i++ < 10){
        console.log('一块 ');
    }
}*/

console.log(1);
process.nextTick(function(){
    console.log(2);
})
process.nextTick(function(){
    console.log(3);
    setImmediate(function(){
        console.log('4');
    })
})
process.nextTick(function(){
    console.log(5);
})
setImmediate(function(){
    console.log('6');
    process.nextTick(function(){
        console.log('xxx');
    })
})

console.log('7');
//1 7 2 3 5 6 xxx 4