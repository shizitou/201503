/**
 * path
 */
var path = require('path');
var fs = require('fs');
/**
 * 1.normalize 将非标准的路径字符串转化为标准的路径字符串
 * 1) 它会解析 . 和..
 * 2) 多个斜杠转化为一个斜杠
 * 3) window 下反斜杠转化为正斜杠
 * 4) 如果是斜杠结尾，转换结束后保留斜杠
 */
console.log(path.normalize(
    './/a/////b//d//..//c//e//..//'));
//  /a/b/c/

/**
 *  join 将多个参数值字符串合并为一个路径字符串
 *
 **/
console.log(path.join(__dirname,'a','b','msg'));
console.log(fs.readFileSync(path.join(__dirname,'a','b','msg'),'utf8'));

/**
 * resolve
 * 以应用程序根目录为起点，根据参数值解析一个绝对路径
 * 1) 以应用程序根目录为起点
 * 2) . 当前目录   ..上级目录
 * 3） 普通 字符串开头的表示当前目录的子目录
 * 4) /开头的表示一个绝对路径，表示根目录
 * 5) 如果没有下一个参数字符串，返回当前路径
 */
console.log(path.resolve());//空代表当前绝对目录路径
console.log(path.resolve
('/a','..','a','b','msg'));// d:\a\b\msg
console.log(fs.readFileSync(path.resolve('.','msg.txt')));

/**
 * relative用于获取两个路径之间相对关系
 * path.relative(from,to);
 * 1) 两个参数可以是相对路径，也可以是绝对路径。
 * 2）返回在第一个路径中如何访问第二个路径
 **/
console.log(path.relative
(__dirname+'/aaa','../stream/../../bbb'));// ../stream

/**
 * dirname 该方法用于获取第一个路径 中的目录名
 * 1) 参数可以是相对路径，也可以是绝对路径
 * 2）如果是目录 的话，返回上级目录，如果是文件返回文件所属目录
 **/
console.log(path.dirname(__dirname));//201503
console.log(path.dirname('./path.js'));//11.path

/**
 * basename 获取一个路径中的文件名
 *ext 除去文件的扩展名
 **/
console.log(path.basename('./path.js'));
console.log(path.basename('./path.js','.js'));
console.log(path.extname('./path.js'));
//操作系统指定的文件分隔符 windo \ linux /
console.log(path.sep);
//环境变量路径分隔符
console.log(path.delimiter);