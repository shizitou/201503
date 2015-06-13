var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
MongoClient.connect('mongodb://123.57.143.189/blog',function(err,db){
    assert.equal(null,err);
    console.log('connected to server');
    //1.单条插入save和批量插入 insert
    /*db.collection('student').insert([{name:'zfpx2',age:2},{name:'zfpx3',age:3}],function(err,result){
        assert.equal(null,err);
        console.log(result);
        db.close();
    });*/
    //2.分页查询
    /*db.collection('person').find({age:{$gt:5}}).skip(2)
        .limit(2).sort({age:1}).toArray(function(err,result){
            assert.equal(null,err);
            console.log(result);
            db.close();// 8 9
        });*/
    //只返回一条记录
   /* db.collection('person').findOne({age:{$gt:5}},function(err,result){
        assert.equal(null,err);
        console.log(result);
        db.close();
    });*/
    //修改
    /*db.collection('person').updateOne({home:'nj2'},{home:'njj2'},{upsert:false},function(err,result){
        assert.equal(null,err);
        console.log(result);
        db.close();
    });*/
    //删除
    db.collection('person').deleteMany({},function(err,result){
        assert.equal(null,err);
        console.log(result);
        db.close();
    });

});