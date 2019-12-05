const mysql = require('mysql');
const mysqlConfig = require('./db.config');
const inventory = require('./inventory')

let connection = mysql.createConnection(mysqlConfig);

connection.connect();

let getSingleProduct = (reqItem) => {
    return new Promise ((resolve, reject) => {
        connection.query(`SELECT * FROM products WHERE id= ${reqItem}`, (error, result) => {
            if (error) {
                reject(error);
            }

            resolve(result);
        })

    })
}

let getAllProducts = () => {
    return new Promise ((resolve, reject) => {
        connection.query(`SELECT * FROM productInfo.products`, (error, result) => {
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
    
            let queryInsert = `INSERT INTO productInfo.products
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
module.exports.getSingleProduct = getSingleProduct;






