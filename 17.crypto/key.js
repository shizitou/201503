/**
 *加密数据
 * cipher decipher属于对称加密算法
 * openssl req -key key.pem -new -x509 -out cert.pem
 **/
var crypto = require('crypto');
console.log(crypto.getCiphers());
var fs = require('fs');
var rs = fs.createReadStream('msg.txt');
var key = fs.readFileSync('key.pem');
var cipher = crypto.createCipher('aes256',key);
var text = '01234567890';
/*for(var i=0;i<10;i++){
    text+=(''+i);
}*/
cipher.update(text,'utf8','hex');
var result = cipher.final('hex');
console.log(result);


var decipher = crypto.createDecipher('aes256',key);
decipher.update(result,'hex','utf8');
dec = decipher.final('utf8');
console.log(dec);