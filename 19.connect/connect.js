
module.exports = connect;

function app(req,res,next){
    app.handle(req,res,next);
}

function connect(){
    app.layers = [];
    return app;
}
app.use = function(route,fn){
    if('string' != typeof route){
        fn = route;
        route = '/';
    }
    this.layers.push({route:route,fn:fn});
}

app.handle = function(req,res,next){
    var index =0;
    var layers = this.layers;
    function next(err){
        var layer = layers[index++];
        if(!layer)
            return;
        var path = req.url || '/';
        var route = layer.route;
        if(path.toLowerCase().substr(0,route.length)
            != route.toLowerCase()){
            return next(err);
        }
        layer.fn(req,res,next);
    }
    next();
}