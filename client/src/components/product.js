import React from 'react';
import '../styles/Product.css';

const Product = (props) => {

  return (
  <div className="product-info-container">
      <div>
        <div>
          {/* <ol className="product-directory">West Buy => Category => Sub-Category</ol> */}
          <h1 className="product-title">{props.selectedProductProp.productName}</h1>

          <div className="product-info">
            <div className="product-model">
              <span>Model: </span>
              <span>{props.selectedProductProp.model}</span>
            </div>

            <div className="product-sku">
              <span>SKU: </span>
              <span>{props.selectedProductProp.sku}</span>
            </div>

            <div className="product-info-aux">
              <div>
                <span>Price: </span>
                <span>{props.selectedProductProp.price}</span>
              </div>
              <div>
                <span>Links: </span>
                <span>{props.selectedProductProp.links}</span>
              </div>
              <div>
                <span>Inventory: </span>
                <span>{props.selectedProductProp.onHand}</span>
              </div>
            </div>
          </div>

          {/* <ul className="product-feedback">
            <div>
              <span >
                <span>**** </span>
                <span>4.5 </span>
                <span>(3000 Reviews) </span>
                <span>\/ </span>
              </span>
            </div>

            <div>
              <a href="www.bbcnews.com">85 Answered Questions</a>
            </div>

            <div>
              <div>
                <div>
                  <p>Only @ Best Buy" </p>
                </div>
              </div>
            </div>
          </ul> */}
        </div>
      </div>
  </div>





)};


export default Product;