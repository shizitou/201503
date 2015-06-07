/**
 * 散列算法=哈希算法
 * 在对一段数据进行验证的情况下，将数据模糊化
 * 为一大段的数据提供一个较验码
 */
var crypto = require('crypto');
//console.log(crypto.getHashes());
var fs = require('fs');
var sha = crypto.createHash('sha1');
var rs = fs.createReadStream('msg.txt');
rs.on('data',function(chunk){
    sha.update(chunk);
})
rs.on('end',function(){
    var d = sha.digest('hex');
    //console.log(d);
});


var md5 = crypto.createHash('md5');
md5.update("123456");
//console.log(md5.digest('hex'));

/*
 * hmac算法将散列值和一个密钥结合在一起，以阻止对签名完整性的破坏
 *
 */

var shasum = crypto.createHmac('sha1',fs.readFileSync('key.pem'));
var rs = fs.createReadStream('msg.txt');
rs.on('data',function(chunk){
    shasum.update(chunk);
})
rs.on('end',function(){
    var d = shasum.digest('hex');
    console.log(d);
});

/**
 * 身份验证 挑战响应模式
 *  1. 客户端发出验证请求
 *  2.服务器收到请求后生成一个随机数发给客户端
 *  3.客户端使用密钥和这个随机数进行运行，得到结果，发给服务器
 *  4.服务器自己也计算一次进行比对，如果一致那表示验证通过。
 *
 **/