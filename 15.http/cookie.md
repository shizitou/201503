#cookie的由来
为了解决HTTP无状态，来认证和标识一个用户的身份。
#实现原理
服务器向客户发cookie
浏览器保存cookie
之后浏览器每次请求的时候都把cookie发给服务器
##设置cookie
domain 域名  默认是当前域名
path 路径 ，默认为/ 路径 不匹配不发送
secure 设置cookie 只能使用https协议访问
 expires 绝对时间，是一个UTC的时间 2015年6月6日16:39:54
 maxAge 相对当前时间的最长存活时间 3600
httponly 设置浏览器不能通过document.cookie修改  
#cookie问题
1. 每次发次有可能浪费带宽
2. 有可能被伪造
3. 不能存储敏感数据
#建议
1.正确设置path domain,不要存储过多的数据，控制cookie体积。
2.可以对静态文件设置单独的域名。