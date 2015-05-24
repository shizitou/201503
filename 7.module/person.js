function Person(name){
    this.name = name;
}
Person.prototype.GetName = function(){
    return this.name;
}
Person.prototype.setName = function(){
    this.name = name;
}
Person.prototype._name = '神雕';
module.exports = Person;
