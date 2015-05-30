/**
 *fs.write
 * fd 描述符
 * buffer 从哪个缓存区读取数据
 * offset 缓存区中读取的开始位置
 * length 缓存区中读取的字节数
 * position 指写写入文件的开始位置
 * callback
 *  err
 *  bytesWritten
 *  buffer
 */
var fs = require('fs');
fs.open('./msg.txt','w',438,function(err,fd){
    console.log(fd);
    fs.write(fd,new Buffer('虎妈猫爸'),3,6,0,function(err,bytesWritten,buffer){
        console.log('成功写入了'+bytesWritten+'字节');
        fs.fsync(fd,function(){
            fs.close(fd,function(){
                fs.open('./msg2.txt','w',438,function(err,fd){
                    console.log(fd);
                    fs.write(fd,new Buffer('虎妈猫爸'),0,6,0,function(err,bytesWritten,buffer){
                        fs.write(fd,new Buffer('虎妈猫爸'),6,6,6,function(err,bytesWritten,buffer){
                            console.log('成功写入了'+bytesWritten+'字节');
                        });
                    });
                });
            });
        });
    });
});

