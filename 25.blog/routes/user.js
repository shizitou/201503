var express = require('express');
var router = express.Router();

router.get('/reg',function(req,res){
    res.render('user/reg',{});
});

router.post('/reg',function(req,res){
    if(!req.body.username || !req.body.password){
        req.flash('error','请输入用户名和密码!');
        return res.redirect('back');
    }
});

router.get('/login',function(req,res){
    res.render('user/reg');
});

router.post('/login',function(req,res){
    res.render('user/reg');
});

module.exports = router;