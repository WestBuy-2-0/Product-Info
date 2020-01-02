const faker = require('faker');

const pg = require("pg");
const pgConfig = require("./config.js");
const pgClient = new pg.Client(pgConfig);
pgClient.connect();

let p_getSingleProduct = (input, callback) => {
    pgClient.query(`SELECT * FROM product WHERE id = ${input}`, (err, result) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, result.rows);
        }
    })
};

let p_insertNewProduct = (callback) => {
    pgClient.query(`INSERT INTO product(productname, price, sku, model, onhand, options, auxcategory)VALUES('${faker.commerce.productName()}', ${faker.commerce.price()}, ${faker.finance.account()}, '${faker.commerce.productAdjective()}', ${faker.random.number()}, '${faker.commerce.productMaterial()}', '${faker.commerce.department()},')`, (err, result) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, 'Inserted');
        }
    })
}

let p_deleteProduct = (id, callback) => {
    pgClient.query(
        `DELETE FROM product WHERE id = ${id}`, (err, result) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, result);
            }
        }
    )
};


let p_updateItem = (id, callback) => {
    pgClient.query(
        `UPDATE product SET price = 00.00 WHERE id = ${id}`, (err, result) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, result);
            }
        }
        )
    };

var MongoClient = require('mongodb').MongoClient;
const client = new MongoClient('mongodb://localhost:27017', { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false, useUnifiedTopology: true });
var db = '';
var col = '';

// client.connect(err => {
//     if (err) {
//         throw err;
//     }
//     db = client.db('product');
//     col = db.collection('product');
// })

let m_updateItem = (id, callback) => {
    col.updateOne({"_id": id}, {"price": 00}, {}, function(err, results) {
        if (err) {
            callback(err, null);
        }
        callback(null, results);
    })
}

let m_deleteProduct = (id, callback) => {
    col.updateOne({"_id": id}, {"productname": null, "price": null, "sku": null, "model": null, "onhand": null, "options": null, "auxcategory": null}, {}, function(err, results) {
        if (err) {
            callback(err, null);
        }
        callback(null, results);
    })
}

let m_getSingleProduct = (id, callback) => {
    col.findOne({"_id": id}, function(error, results) {
        if (error) {
            callback(err, null);
        }
        callback(null, results[0])
    })
};

let m_insertNewProduct = (callback) => {
    col.insertOne({"productname": faker.commerce.productName(), "price": faker.commerce.price(), "sku": faker.finance.account(), "model": faker.commerce.productAdjective(), "onhand": faker.random.number(), "options": faker.commerce.productMaterial(), "auxcategory": faker.commerce.department()}, function(err, results) {
        if (err) {
            callback(err, null);
        }
        callback(null, results);
    });
}

module.exports.p_updateItem = p_updateItem;
module.exports.p_deleteProduct = p_deleteProduct;
module.exports.p_getSingleProduct = p_getSingleProduct;
module.exports.p_insertNewProduct = p_insertNewProduct;
module.exports.m_getSingleProduct = m_getSingleProduct;
module.exports.m_insertNewProduct = m_insertNewProduct;
module.exports.m_deleteProduct = m_deleteProduct;
module.exports.m_updateItem = m_updateItem;