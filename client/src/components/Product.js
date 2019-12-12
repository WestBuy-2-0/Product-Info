import React from 'react';
import ProductInfo from './ProductInfo';
import ProductInfoCart from './ProductInfoCart';
import ProductInfoDirectory from './ProductInfoDirectory';

const Product = (props) => {
  return (
  <div className="main-container">
    <div className="container">
      <div className="product-directory-bar">
        <ProductInfoDirectory productInfoDirectoryProp={props.selectedProductProp} />
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







