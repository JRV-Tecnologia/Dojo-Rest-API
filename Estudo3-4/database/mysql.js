const mysql = require('mysql');
var pool = mysql.createPool({
  "user" : "root", 
  "password" : "jrv123", 
  "database": "dojo", 
  "host" : "127.0.0.1", 
  "port" : 3306, 
});

exports.pool = pool;

