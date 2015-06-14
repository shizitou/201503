var Waterline = require('waterline');
//创建一个 config实例
function Models(config){
    var adapters = {};
    adapters['default'] = adapters[config.adapter]
    =require('sails-'+config.adapter);
    this._config = {
        adapters:adapters,
        connections:{
            'default':config
        },
        defaults:{
            migrate:'alter'
        }
    }
    this._orm = new Waterline();
}
//注册一个模型
Models.prototype.register = function(model){
    model.connection = 'default';
    this._orm.loadCollection(Waterline.Collection.extend(model));
}
//初始化的方法
Models.prototype.initialize = function(callback){
    var self = this;
    self._orm.initialize(self._config,function(err,models){
        if(err) return callback(err);
        self._collections = models.collections;
        callback(null,self._collections);
    });
}
//获取指定名称的模型
Models.prototype.get = function(name){
    return this._collections[name];
}
module.exports= Models;