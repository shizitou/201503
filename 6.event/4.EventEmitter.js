//http://192.168.0.109:8360/
/**
 * 发布订阅 EventEmitter
 * addListener
 * on
 * once
 * removeListener
 * removeAllListener
 * emit
 * listeners
 * listenerCount
 */
var util = require('util');
var EventEmitter = require('events').EventEmitter;
function Bell(){

}

util.inherits(Bell,EventEmitter);
var bell = new Bell();
bell.addListener('ring',function(){
    console.log('老师进教室 ');
});
bell.on('ring',function(){
    console.log('学生进教室 ');
});
var masterin = function(){
    console.log('班主任进教室 ');
}
bell.on('ring',masterin);
bell.emit('ring');
//bell.removeListener('ring',masterin);
//bell.removeAllListeners('ring');
console.log(bell.listeners('ring'));
console.log(EventEmitter.listenerCount(bell,'ring'));
for(var i=0;i<100;i++){
    bell.on('ring',masterin);
}
bell.emit('ring');





