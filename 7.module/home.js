console.log('hello');
var name = 'zf';
exports.name = 'zfpx';
exports.showName = function(name){
    console.log('I am '+name);
}
/*module.exports = {};
var exports = module.exports;*/
module.exports = function(){
    console.log('I am ok.');
}
//return module.exports;