
var http = require('http');
var url = require('url');
var connect = require('./connect');
var middleware = require('./middleware');
var route = require('./route');

var app = connect();
app.use(middleware.send);
app.use(middleware.parse);
app.use('/book',route.book);
app.use('/',route.root);
http.createServer(app).listen(8080);