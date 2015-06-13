var mysql = require('mysql');

var connection = mysql.createConnection({
    host:'123.57.143.189',
    user:'root',
    password:'zfpx2015',
    database:'blog2'
});

connection.connect();
var columns = ['name','age'];
var username = 'stu2';
var sql = "select ?? from person where name = ?";

connection.query(sql,[columns,username],function(err,rows,fields){
    if(err)
        console.error(err);
    else{
        console.log(rows);
    }
    connection.end();
});
