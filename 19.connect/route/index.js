var url = require('url');
var DATA = {
    '1':'<h1>第一本书</h1>',
    '2':'<h1>第二本书</h1>',
    '3':'<h1>第三本书</h1>',
    '4':'<h1>第四本书</h1>'
}
function getBookById(id){
    return DATA[id]||'书籍不存在';
}
exports.root= function(req,res,next){
    var result = '';
    for(var attr in DATA){
        result += ('<a href="/book?id='+attr+'">'+DATA[attr]+'</a>');
    }
    res.send(result);
}
exports.book= function(req,res,next){
    res.send(DATA[req.query['id']]);
}