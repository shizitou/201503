/**
 *连接池
 *
 */
var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit:2,//连接池最多可以创建的连接数
    host:'123.57.143.189',
    user:'root',
    database:'blog2',
    password:'zfpx2015',
    queueLimit:8//队伍中等待连接的最大数量，0为不限制。
});

//pool.query('select * from person',function(err,rows){
//    console.log(rows);
//});

//连接被创建
pool.on('connection',function(){
    console.log('创建一个连接');
})
//当一个回调压入队伍等待连接的时候触发入队事件
pool.on('enqueue',function(){
    console.log('入队');
});
function query(){
    pool.getConnection(function(err,connection){
        connection.query('select * from person',function(err,rows){
            setTimeout(function(){
                connection.release();
            },2000)
        });
    });
}
query();
query();
query();
/**
 * 创建一个连接
 * 创建一个连接
 * 入队
 */

