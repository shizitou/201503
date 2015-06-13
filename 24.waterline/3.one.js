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

var Husband = Waterline.Collection.extend({
    identity:'husband',//模型的名称
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
        },
        wife:{
            model:'wife'
        }
    }
});


var Wife = Waterline.Collection.extend({
    identity:'wife',//模型的名称
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
orm.loadCollection(Husband);
orm.loadCollection(Wife);
orm.initialize(config,function(err,models){//初始化这些模块
    if(err)
        throw err;
   models.collections.husband.create({
       firstName:'tom'
   },function(err,husband){
       models.collections.wife.create({
           firstName:'cat',
           lastName:'tom',
           age:'5'
       },function(err,wife){
           models.collections.husband.update({id:husband.id},{wife:wife.id},function(){
               models.collections.husband.find({id:husband.id}).populate('wife').exec(console.log);
           });
       });
   });



});