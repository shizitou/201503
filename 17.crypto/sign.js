/**
 * 公钥和私钥
 * 在网络中，私钥拥有者可以在发送数据之前对数据进行签名。
 * 签名过程中，对数据进行加密，加密之后发送。
 * 数据接收者可以通过公钥进行解密和验证。
 **/
var crypto = require('crypto');
var fs = require('fs');
//私钥
var key = fs.readFileSync('key.pem').toString('ascii');
var sign = crypto.createSign('RSA-SHA256');
sign.update('test');
var s = sign.sign(key,'hex');
console.log(s);

/**
 * 签名认证
 * openssl req -key key.pem -new -x509 -out cert.pem
 **/
var publicKey = fs.readFileSync('cert.pem').toString('ascii');
var data = 'test';
var verify = crypto.createVerify('RSA-SHA256');
verify.update(data);
console.log(verify.verify(publicKey,s,'hex'));