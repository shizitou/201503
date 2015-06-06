/**
 * 对一个cookie进行序列化
 * serialize('name','zfpx',{httpOnly:true}) "name=zfpx; httpOnly"
 * @param name
 * @param value
 * @param opt
 */
exports.serialize = function(name,value,opt){
    opt = opt || {};
    var paires = [name+ '=' +value];
    if(null != opt.maxAge){
        var maxAge = opt.maxAge -0;
        if(isNaN(maxAge))
            throw new Error('maxAge 必须是数字类型');
        paires.push('Max-Age='+maxAge);
    }
    if(opt.domain) paires.push('Domain='+opt.domain);
    if(opt.path) paires.push('Path='+opt.path);
    if(opt.expires)paires.push('Expires='+opt.expires.toGMTString());
    if(opt.httpOnly) paires.push('HttpOnly');
    if(opt.secure)paires.push('Secure');
    return paires.join('; ');
}