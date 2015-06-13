var express = require('express');
var index = require('serve-index');
var static = require('serve-static');
var util = require('util');
var app = express();
app.use(index('.',{}));
app.use(static('.'));

app.listen(8080);