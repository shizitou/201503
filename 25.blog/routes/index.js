var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
    res.render('index');//渲染模板
});

module.exports = router;