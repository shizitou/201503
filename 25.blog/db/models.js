var Models = require('../lib/models');
var models = new Models({
    adapter:'mysql',
    host:'123.57.143.189',
    user:'root',
    password:'zfpx2015',
    database:'blog'
});
models.register({
    identity:'user',//模型的名称
    attributes: {//指定模型里面有哪些属性
        username: {
            type: 'string',
            required: true
        },
        password: {
            type: 'string',
            required: true
        }
    }
})

models.register({
    identity:'article',//模型的名称
    attributes: {//指定模型里面有哪些属性
        title: {
            type: 'string',
            required: true
        },
        content: {
            type: 'string',
            required: true
        },
        user:{
            type: 'integer',
            required: true
        }
    }
})

models.initialize(function(err){
    if(err) throw err;
    console.log('I am ready!');
})
module.exports = models;