/**
 * fs.writeFile(path, data, options, callback);
 * path 定入的文件路径
 * data 要写入到文件里的数据
 * options 参数
 *   encoding 编码
 *   mode 0666 创建的文件的权限  r=read=4 x=execute=1 w=write=2
 *   二爷一直死读（书） 李渊见糖留一把 李渊618年建立唐朝
 *    d   rwx   r-x    r-x
 *      所有者 所属组    其它人
 *   flag: w 写入
 * callback 回调
 *
 */

var fs = require('fs');
fs.writeFile('test.txt','第一行',{flag:'w',mode:0666,encoding:'utf8'},function(err){
    console.log('write over '+ err);
});

fs.writeFile('test.txt',new Buffer('珠峰培训'),{flag:'a',mode:0666,encoding:'utf8'},function(err){
    console.log('write over '+ err);
});

fs.appendFile('./msg.txt','appendFile',function(err){
    console.log('success');

});
/**
 * base64个8位字节转化为4个6位字节
 *
 */
fs.readFile('gigi.jpg','base64',function(err,data){
    fs.writeFile('gi.jpg',data,'base64',function(){
        console.log('copy successfully');
    });
});