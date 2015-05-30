var systemPath = require('path');
var fs = require('fs');
function remove(path) {
//非空
    if (!path) {
        return;
    }
//路径是否存在
    var result = fs.existsSync(path);
    if (!result) {
        console.log('不存在' + path);
        return;
    }
//文件属性
    var st = fs.statSync(path);
//处理目录
    if (st.isDirectory()) {
//读取目录
        var file = fs.readdirSync(path);

        if (file && file.length) {
//遍历目录
            for (var i = 0; i < file.length; i++) {
                console.log('进入' + systemPath.join(path, file[i]));
                remove(systemPath.join(path, file[i]));
            }
//递归回来删除自己
            console.log('删除目录' + path);
            fs.rmdir(path);
        } else {
//删除空目录
            console.log('删除目录' + path);
            fs.rmdir(path);
        }
    } else {
//删除文件
        console.log('删除文件' + path);
        fs.unlinkSync(path)
    }
}

remove('test');