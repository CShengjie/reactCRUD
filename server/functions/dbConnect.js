const mysql = require('mysql2');

const db = mysql.createPool({
    connectionLimit: 10,
    user:'root',
    host:'localhost',
    port:'3306',
    password: 'Sun20201',
    database: 'testdb'
});

module.exports = db;
