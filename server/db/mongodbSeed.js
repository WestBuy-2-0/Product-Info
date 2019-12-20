const faker = require('faker');
const mongoose = require('mongoose');
const ObjectID = require('mongodb').ObjectID;

const db = mongoose.connect('mongodb://localhost/product');
const conn = mongoose.connection;

conn.on('error', console.error.bind(console, 'MongoDB connection error:'))

var seedDatabase = function() {
  var id = 0;
  for (var j = 0; j < 10; j++) {
    setTimeout(function() {
      oneMillion();
    }, 30000*j)
  }
  var oneMillion = function() {
    for (var k = 0; k < 400; k++) {
      twentyFiveHundo();
    }
  }
  
  var twentyFiveHundo = function() {
    var bulkInserts = [];
    for (var i = 0; i < 2500; i++) {
      bulkInserts.push({insertOne: {"productname": faker.commerce.productName(), "price": faker.commerce.price(), "sku": faker.finance.account(), "model": faker.commerce.productAdjective(), "onhand": faker.random.number(), "options": faker.commerce.productMaterial(), "auxcategory": faker.commerce.department()}})
      id++;
    }
    conn.collection('product').bulkWrite(bulkInserts);
  }
}


seedDatabase();