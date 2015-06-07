
var http = require('http');
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
http.createServer(function(req,res){
    res.send = function(html){
        res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
        res.end(html);
    }
    var urlObj = url.parse(req.url,true);
    req.query = urlObj.query;
    var pathname = urlObj.pathname;
    if(pathname == '/'){
        var result = '';
        for(var attr in DATA){
            result += ('<a href="/book?id='+attr+'">'+DATA[attr]+'</a>');
        }
        res.send(result);
    }else if(pathname == '/book'){
        res.send(DATA[req.query['id']]);
    }

}).listen(8080);