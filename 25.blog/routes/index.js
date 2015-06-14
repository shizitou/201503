var express = require('express');
var router = express.Router();
var models = require('../db/models');
router.get('/',function(req,res){
    models.get('article').find().exec(function(err,articles){
        if(err) next(err);
        res.render('index',{title:'首页',articles:articles});//渲染模板
    });

});

module.exports = router;