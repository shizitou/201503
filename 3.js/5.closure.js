var number = 2; obj = {
    number :4,
    fn1:(function(){
        this.number *=2;
        number = number *2;
        var number = 3;
        return function(){
            this.number *=2;
            number *=3;
            console.log(number);//9
        }
    })()
}
var fn1 = obj.fn1;
console.log(number);//2
fn1();//9
obj.fn1();//27
console.log(number);//2
console.log(obj.number);//8