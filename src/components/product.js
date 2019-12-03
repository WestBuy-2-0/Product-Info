import React from 'react';

const Product = (props) => {

  return (
  <div>
    <h4>Product: {props.selectedProductProp.productName}</h4>
    <h4>Price: {props.selectedProductProp.price}</h4>
    <h4>Links: {props.selectedProductProp.links}</h4>
    <h4>Sku: {props.selectedProductProp.sku}</h4>
    <h4>Model: {props.selectedProductProp.model}</h4>
    <h4>Inventory: {props.selectedProductProp.onHand}</h4>
  </div>
)};


export default Product;