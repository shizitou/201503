var mongoose = require('mongoose');
var assert = require('assert');
var connection = mongoose.createConnection(
    'mongodb://123.57.143.189/blog',function(err){
        assert.equal(null,err);
    }
);

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var schema = new Schema({
    name:String,
    age:Number,
    hobby:[]
});

var Student = connection.model('Student',schema);

//插入数据库
var stu = new Student({
    name:'zfpx',
    age:6,
    hobby:['eat','sleep'],
    vnote:'something'
});

//stu.save();

//查询
Student.find({},{age:1,_id:0}).skip(2).limit(2).sort({age:1}).exec(function(err,ret){
    console.log(ret);
});

Student.update({},{$set:{'hobby.0':'sports'}},function(err,ret){
    console.log(ret);
});



