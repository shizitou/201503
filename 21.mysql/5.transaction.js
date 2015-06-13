var mysql = require('mysql');
/**
 * 事务 ACID
 * 原子性 Atomic
 * 一致性  Consistency
 * 隔离性 Isolation
 * 持久性 Durability
 */

var connection = mysql.createConnection({
    host:'123.57.143.189',
    user:'root',
    password:'zfpx2015',
    database:'blog2',
    queryFormat:function(query,values){
        if(!values) return query;
        return query.replace(/\:(\w+)/g,function(txt,key){
            if(values.hasOwnProperty(key)){
                return this.escape(values[key]);
            }
            return txt;
        }.bind(this))
    }
});

var title = '3';
var s = "show variables like '%storage_engine%'";
//var s = 'alter table account2  engine=innodb;  ';
connection.query(s,function(){
    console.log(arguments);
    connection.beginTransaction(function(err) {
        if (err) { throw err; }
        connection.query('update account1 set mny=0 where id=1', title, function(err, result) {
            if (err) {
                connection.rollback(function() {
                    throw err;
                });
            }

            var log = 'Post ' + result.insertId + ' added';

            connection.query('update account2 set mny=200 where1 id=1', log, function(err, result) {
                if (err) {
                    connection.rollback(function() {
                        throw err;
                    });
                }
                connection.commit(function(err) {
                    if (err) {
                        connection.rollback(function() {
                            throw err;
                        });
                    }
                    console.log('success!');
                });
            });
        });
    });
})
