import React from 'react';
import '../styles/Product.css';

const Product = (props) => {

  return (
  <div className="main-container">
    <div className="container">

      <div className="product-directory-bar">
        <ol className="product-directory"> <a href="www.bbcnews.com">West Buy</a> > <a href="www.bbcnews.com">Category</a> > <a href="www.bbcnews.com">Sub-Category</a></ol>
        <div className="product-links">
          <button>Share</button>
          <button>Print</button>
        </div>
      </div>


      <div className="product-info-column-one">
        <h1 className="product-title">{props.selectedProductProp.productName}</h1>

        <div className="product-info">
          <div className="product-model">
            <span>Model: </span>
            <span>{props.selectedProductProp.model} </span>
          </div>

          <div className="product-sku">
            <span>SKU: </span>
            <span>{props.selectedProductProp.sku}</span>
          </div>
        </div>

        <div className="product-feedback">
            <div className="product-feedback-bar">
              <span>****</span>
              <span>4.5</span>
              <span>(3000 Reviews)</span>
              <span>\/</span>
              <a href="www.bbcnews.com">  | 85 Answered Questions</a>
            </div>
        </div>
        <div className="product-info-only-at-button">
          <button>Only @ Best Buy</button>
        </div>

        <div className="image-modal-component">
        </div>

      </div>

      <div className="product-info-column-two">
        <div className="product-price-match-guarantee">
          <span className="product-price-match-guarantee-span">
            Price Match Guarantee
          </span>
        </div>
        <div className="product-info-price">
          <span className="product-info-price-span">
            {props.selectedProductProp.price}
          </span>
        </div>
        <div className="product-info-open-box-option">
          <span>Open-Box:</span>
          <span> from $XX.XX</span>
        </div>
        <div className="product-info-variations">
          <div className="product-info-variations-header">
            <label className="product-info-variations-label">Product Options</label>
          </div>
        </div>
        <div className="product-info-fulfillment">
          <div className="product-info-fulfillment-option-one"> <strong>FREE Shipping: Get it by Thu, Dec 12</strong></div>
          <div className="product-info-fulfillment-option-two"><strong>Want it tomorrow? </strong>Choose Next-Day Delivery in checkout to 73301.</div>
          <div className="product-info-fulfillment-option-three"> <strong>Store Pickup:</strong>Order now and South Austin will have it ready for pickup by Thu, Dec 12. Available today at a store 9 miles away.</div>
        </div>
        <div className="product-info-cart">
          <button className="product-info-cart-button">Add to Cart</button>
          <div className="product-info-cart-aux">
            <div className="product-info-compare">
              <label>
                <i></i>
                Compare
              </label>
            </div>
            <div className="product-info-save">
              <div className="product-info-save-for-later">
                <button className="product-info-save-for-later-button">
                  {/* <img></img> */}
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
)};


export default Product;


