const pg = require("pg");
const pgConfig = require("./config.js");
const faker = require('faker');

const pgClient = new pg.Client(pgConfig);
pgClient.connect();

const mongoose = require('mongoose');
const ObjectID = require('mongodb').ObjectID;

const db = mongoose.connect('mongodb://localhost/product');
const conn = mongoose.connection;

let p_getSingleProduct = (input, callback) => {
    pgClient.query(`SELECT * FROM product WHERE id === ${input}`, (err, result) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, result);
        }
    })
};

let p_insertNewProduct = (callback) => {
    pgClient.query(`INSERT INTO product(productname, price, sku, model, onhand, options, auxcategory)VALUES('${faker.commerce.productName()}', ${faker.commerce.price()}, ${faker.finance.account()}, '${faker.commerce.productAdjective()}', ${faker.random.number()}, '${faker.commerce.productMaterial()}', '${faker.commerce.department()},')`, (err, result) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, result);
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

let m_getSingleProduct = (id, callback) => {
    conn.collection('product').findOne({ "id": id }, (err, results) => {
        if (err) {
            callback(err, null)
        } else {
            callback(null, results)
        }
    })
};

// let m_insertNewProduct = (callback) => {
    // conn.collection('product').insertOne({"productname": faker.commerce.productName(), "price": faker.commerce.price(), "sku": faker.finance.account(), "model": faker.commerce.productAdjective(), "onhand": faker.random.number(), "options": faker.commerce.productMaterial(), "auxcategory": faker.commerce.department()})
// }

module.exports.p_updateItem = p_updateItem;
module.exports.p_deleteProduct = p_deleteProduct;
module.exports.p_getSingleProduct = p_getSingleProduct;
module.exports.p_insertNewProduct = p_insertNewProduct;
module.exports.m_getSingleProduct = m_getSingleProduct;
// module.exports.m_insertNewProduct = m_insertNewProduct;