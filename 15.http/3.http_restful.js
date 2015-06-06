/**
 * 通常我们只需要处理get post
 * rest里面，请求方法非常重要，决定资源的操作行为
 * put 新建 post 更新 get查看  delete 删除一个资源
 * @type {*}
 */
var http = require('http');

var server = http.createServer();
var util = require('util');
var fs = require('fs');
var out = fs.createWriteStream('./log.txt');
function update(req, res) {
    res.end('update');
}
function del(req, res) {
    res.end('del');
}
function put(req, res) {
    res.end('put');
}
function get(req, res) {
    res.end('get');
}
server.on('request', function (req, res) {
    if (req.url == '/book:1') {
        switch (req.method) {
            case 'POST':
                update(req, res);
                break;
            case 'DELETE':
                del(req, res);
                break;
            case 'PUT':
                put(req, res);
                break;
            case 'GET':
                get(req, res);
                break;
        }
    } else
        res.end('hello');
});

server.on('close', function () {
    console.log('服务器关闭了');
});

server.on('error', function (err) {
    console.error(err);
});

server.listen(8080);