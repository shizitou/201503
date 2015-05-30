var fs = require('fs');
var path = require('path');
/**
 * 目录是一个树状结构，
 * 深度优先 到达一个节点后，首先遍历子节点而不是兄弟节点
 * +先序遍历 首次到达某节点就算遍历完成
 **/

function deepVerse(dir){
    console.log(dir);
    var stat = fs.statSync(dir);
    if(stat.isDirectory()){
        var files = fs.readdirSync(dir);
        for(var i=0;i<files.length;i++){
            deepVerse(path.join(dir,files[i]));
        }
    }
}
//deepVerse(path.resolve('./A'));

function deepVerse2(dir,cb){
    fs.readdirSync(dir).forEach(function(file){
        var pathname = path.join(dir,file);
        if(fs.statSync(pathname).isDirectory()){
            cb(pathname);
            deepVerse2(pathname,cb);
        }else{
            cb(pathname);
        }
    });
}
//deepVerse2(path.resolve('./A'),function(data){
//    console.log(data);
//});

function asyncDeepVerse(dir,cb,mynext){
    fs.readdir(dir,function(err,files){
        (function next(i){
            if(i<files.length){
                var pathname = path.join(dir,files[i]);
                cb(pathname);
                fs.stat(pathname,function(err,stats){
                    if(stats.isDirectory()){
                        asyncDeepVerse(pathname,cb,function(){
                            next(i+1);
                        });
                    }else{
                        cb(pathname);
                    }
                });
            }else{
                mynext();
            }
        })(0);
    })
}

/*
asyncDeepVerse(path.resolve('./A'),function(data){
    console.log(data);
},function(){
    console.log('over');
});*/
var arr = [];//当前层的文件夹
var newArr = [];
function wide(dir){
    arr.push(dir);
    wideVerse(arr);
}
function wideVerse(arr){
    if(arr.length>0){
        for(var i=0;i<arr.length;i++){
            console.log(arr[i]);
            var stat = fs.statSync(arr[i]);
            if(stat.isDirectory()){
                var files = fs.readdirSync(arr[i]);
                for(var j=0;j<files.length;j++){
                    newArr.push(path.join(arr[i],files[j]));
                }
            }
        }
        arr = newArr;
        newArr = [];
        if(arr.length>0){
            wideVerse(arr);
        }
    }
}
wide(path.resolve('./A'));