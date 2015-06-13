var Waterline = require('waterline');
var diskAdapter = require('sails-disk');//适配器模式，支持不同的存储引擎
var mysqlAdapter = require('sails-mysql');
var config = {
    adapters:{
        disk:diskAdapter,
        mysql:mysqlAdapter
    },
    connections:{
        localDisk:{
            adapter:'disk',//使用哪个适配器
            filePath:'./data'//指定数据存储的目录
        },
        mysql:{
            adapter:'mysql',//使用哪个适配器
            host:'123.57.143.189',
            user:'root',
            password:'zfpx2015',
            database:'blog'
        }
    },
    defaults:{
        migrate:'alter'
    }
}

var User = Waterline.Collection.extend({
    identity:'user',//模型的名称
    connection:'mysql',
    attributes: {//指定模型里面有哪些属性
        firstName: {
            type: 'string',
            required: true
        },

        lastName: {
            type: 'string',
            required: true
        },
        age: {
            type: 'string',
            required: true
        }
    }
});


var Person = Waterline.Collection.extend({
    identity:'person',//模型的名称
    connection:'mysql',
    attributes: {//指定模型里面有哪些属性
        firstName: {
            type: 'string',
            required: true
        },

        lastName: {
            type: 'string',
            required: true
        },
        age: {
            type: 'string',
            required: true
        }
    }
});

var orm = new Waterline();
orm.loadCollection(User);
orm.loadCollection(Person);
orm.initialize(config,function(err,models){//初始化这些模块
    if(err)
        throw err;
   models.collections.user.create({
       firstName:'tom',
       lastName:'cat',
       age:'6'
   },function(err,ret){
       //console.log(ret);
       models.collections.user.find({},console.log);
   });

    models.collections.person.create({
        firstName:'tom',
        lastName:'cat',
        age:'6'
    },function(err,ret){
        //console.log(ret);
        models.collections.person.find({},console.log);
    });

});