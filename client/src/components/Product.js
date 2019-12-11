import React from 'react';
import ProductInfo from './ProductInfo'
import ProductInfoCart from './ProductInfoCart'

const Product = (props) => {
  return (
  <div className="main-container">
    <div className="container">
      <div className="product-directory-bar">
        <div className="product-directory"> 
          <a href="#" className="product-info-category-directory">West Buy</a> <i className="fas fa-caret-right"></i> 
          <a href="#" className="product-info-category-directory">Category</a> <i className="fas fa-caret-right"></i>
          <a href="#" className="product-info-category-directory">Sub-Category</a>
        </div>
        <div className="product-links">
          <button className="product-links-share">Share</button>
          <button className="product-links-print">Print</button>
        </div>
      </div>

      <ProductInfo productInfoProp={props.selectedProductProp} />
      <ProductInfoCart productInfoCartProp={props.selectedProductProp} />

      
    </div>
  </div>
)};


export default Product;


