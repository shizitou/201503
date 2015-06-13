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

connection.connect();
connection.beginTransaction(function(err){
    if(err) throw err;
    connection.query('update account1 set mny=0 where id=1',function(err,result){
        if(err) {
            connection.rollback(function(){
                throw err;
            });
            throw err;
        }
        connection.query('update account2 set mny=200,dfsd where id=1',function(err,result){
            console.error('second over'+err);
            if(err) {
                connection.rollback(function(){
                    console.error('rollback over'+require('util').inspect(arguments));
                    //throw err;
                });
                //throw err;
            }else{
                connection.commit(function(err){
                    if(err) {
                        connection.rollback(function(){
                            throw err;
                        });
                        throw err;
                    }
                    console.log('success');
                });
            }

        });
    });
})