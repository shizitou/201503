var mysql = require('mysql');

var connection = mysql.createConnection({
    host:'123.57.143.189',
    user:'root',
    password:'zfpx2015',
    database:'blog2'
});

connection.connect();
var username = 'admin\' or 1=\'1';
var sql = "select * from person where " +
    "name='"+username+"'";
console.log(sql);
connection.query(sql,function(err,rows,fields){
    if(err)
        console.error(err);
    else{
        console.log(rows);
    }
    connection.end();
});
