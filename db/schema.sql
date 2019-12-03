DROP DATABASE IF EXISTS productInfo;

CREATE DATABASE productInfo;

USE productInfo;

CREATE TABLE products (
  id int NOT NULL,
  productName varchar(50) NOT NULL,
  price decimal(10, 2) NOT NULL,
  links varchar(500) NOT NULL,
  sku varchar(10) NOT NULL,
  model int NOT NULL,
  onHand int NOT NULL,
  PRIMARY KEY (ID)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.*/

/* For the record, these numbers were generated with Math.random,
 * please don't read into them. :) */

-- INSERT INTO prodcuts (id, price, productName, sku, model, onHand) VALUES ();
