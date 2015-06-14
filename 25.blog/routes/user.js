var express = require('express');
var router = express.Router();
var models = require('../db/models');
var encryUtils = require('../utils/encryUtils');

router.get('/reg',function(req,res){
    res.render('user/reg',{title:'注册用户',action:'/user/reg'});
});

router.post('/reg',function(req,res){
    if(!req.body.username || !req.body.password){
        req.flash('error','请输入用户名和密码!');
        return res.redirect('back');
    }
    models.get('user').findOne({username:req.body.username},function(err,user){
        if(err){
            req.flash('error',err);
            return res.redirect('back');
        }
        if(user){
            req.flash('error','用户名已经被占用，请重新填写');
            return res.redirect('back');
        }
        models.get('user').create({username:req.body.username,password:encryUtils.encrypt(req.body.password)},function(err,newUser){
            res.redirect('/user/login');
        });

    });
});

router.get('/login',function(req,res){
    res.render('user/reg',{title:'登录用户',action:'/user/login'});
});

router.get('/logout',function(req,res){
    delete req.session.user;
    res.redirect('/');
});

router.post('/login',function(req,res){
    if(!req.body.username || !req.body.password){
        req.flash('error','请输入用户名和密码!');
        return res.redirect('back');
    }
    models.get('user').findOne({username:req.body.username},function(err,user){
        if(err){
            req.flash('error',err);
            return res.redirect('back');
        }
        if(!user){
            req.flash('error','用户名不存在，请重新填写');
            return res.redirect('back');
        }
        if(user.password != encryUtils.encrypt(req.body.password)){
            req.flash('error','密码错误，请重新填写');
            return res.redirect('back');
        }
        req.flash('success','登录成功');
        req.session.user = user;
        res.redirect('/');
    });
});

module.exports = router;