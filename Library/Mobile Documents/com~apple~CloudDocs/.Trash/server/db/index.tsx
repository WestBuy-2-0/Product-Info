const mysql = require('mysql');
const mysqlConfig = require('./config.tsx');

let connection = mysql.createPool(mysqlConfig);

findTrending = function (callback) {
    connection.query(`SELECT * FROM trending;`, (error, results) => {
        if (error) {
            callback(error, null);
        } else {
            console.log(results);
            callback(null, results);
        }
    })
}