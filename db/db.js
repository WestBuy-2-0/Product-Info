const mysql = require('mysql');
const mysqlConfig = require('./config');
const inventory = require('./inventory')

let connection = mysql.createConnection(mysqlConfig);

connection.connect();


let getAllProducts = () => {
    return new Promise ((resolve, reject) => {
        connection.query(`SELECT * FROM productinfo.products`, (error, result) => {
            if (error) {
                reject(error)
            }
            resolve(result);
        })
    })
}

let seedDatabase = () => {
    return new Promise ((resolve, reject) => {
        for (let product = 0; inventory.length > product; product++) {
    
            let queryInsert = `INSERT INTO productinfo.products
                (id, productName, price, links, sku, model, onHand) 
                VALUES ("${inventory[product].id}", "${inventory[product].name}", 
                        "${inventory[product].price}", "LINK",
                        "${inventory[product].sku}", "${inventory[product].model}", 
                        "${inventory[product].stock}")`
    
            connection.query(queryInsert, (error, result) => {
                if (error) {
                    reject(error)
                }
                resolve(result);
            })
        }
    })
}

module.exports.getAllProducts = getAllProducts;
module.exports.seedDatabase = seedDatabase;





