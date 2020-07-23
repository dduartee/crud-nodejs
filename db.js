const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'dev',
    password: 'dev',
    database: 'db' 
});

db.connect(function(err) {
    if (err) throw err;
    console.log("Banco de dados conectado");
});

module.exports = db;