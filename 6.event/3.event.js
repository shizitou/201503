/**
 *
 */
function Event(){

};

Event.prototype.addListener = function(type,listener){
    if(typeof listener !='function')
        throw TypeError('listener must be a function');
    if(!this._events){
        this._events = {};
    }
    if(this._events[type]){
        this._events[type].push(listener);
    }else{
        this._events[type] = [listener];
    }
}

Event.prototype.emit = function(type){
    if(!this._events){
        this._events = {};
    }
    var handlers = this._events[type];
    var arr = new Array(arguments.length -1);
    for(var i=1;i<arguments.length;i++){
        arr[i-1] = arguments[i];
    }
    for(var j=0;j<handlers.length;j++){
        handlers[j].apply(this,arr);
    }
}
//上课铃
function Bell(){

}

Bell.prototype = new Event();
var bell = new Bell();
function Teacher(){

}
Teacher.prototype.action = function(lesson){
    console.log('老师要讲'+lesson+'课了');
}
function Student(){

}
Student.prototype.action = function(lesson){
    console.log('要上'+lesson+'课啦');
}
var teacher = new Teacher();
bell.addListener('ring',teacher.action);
var student = new Student();
bell.addListener('ring',student.action);
