var url = require('url');
exports.send= function(req,res,next){
    res.send = function(html){
        res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
        res.end(html);
    }
    next();
}
exports.parse= function(req,res,next){
    var urlObj = url.parse(req.url,true);
    req.query = urlObj.query;
    req.pathname = urlObj.pathname;
    next();
}