var mysql = require('mysql');

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
var sql = "select * from person where name = :name and name=:name and age=:age";
connection.query(sql,{name:'stu2',age:2},function(err,rows,fields){
    if(err)
        console.error(err);
    else{
        console.log(rows);
    }
    connection.end();
});
