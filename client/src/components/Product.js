import React from 'react';

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

      <div className="product-info-column-one">
        <h1 className="product-title">{props.selectedProductProp.productName}</h1>
        <div className="product-info">
          <div className="product-model">
            <span className="product-info-label">Model: </span>
            <span>{props.selectedProductProp.model} </span>
          </div>

          <div className="product-sku">
            <span className="product-info-label">SKU: </span>
            <span>{props.selectedProductProp.sku}</span>
          </div>
        </div>

        <div className="product-feedback">
            <div className="product-feedback-bar">
              <div className="product-info-review-bar">
                <span className="product-info-review-stars">****</span>
                <span className="product-info-review-score">4.5</span>
                <span className="product-info-review-total">(3000 Reviews)</span>
                <i className="fas fa-chevron-down" id="chevron-icon"></i>
              </div>

              <div className="product-info-questions-bar">
                <a href="www.bbcnews.com" className="product-info-questions-bar-link">85 Answered Questions</a>
              </div>
            </div>
        </div>
        <div className="product-info-only-at-row">
          <div className="product-info-only-at-div">
            <button className="product-info-only-at-button">
              <p className="product-info-only-at-text-one">Only 
              <span className="product-info-only-at-text-two"> @ West Buy</span></p> 
            </button>
          </div>
        </div>

        <div className="image-modal-component">
        </div>

      </div>

      <div className="product-info-column-two">
        <div className="product-info-price-match-guarantee">
          <span className="product-info-price-logo">
            <i className="fas fa-dollar-sign"></i>
          </span>
          <span className="product-info-price-match-guarantee-span">
            Price Match Guarantee
          </span>
        </div>
        <div className="product-info-price">
          <span className="product-info-price-span">
            ${props.selectedProductProp.price}
          </span>
        </div>
        <div className="product-info-open-box-option">
          <span className="product-info-open-box-label">Open-Box:</span>
          <span className="product-info-open-box-price"> from $XX.XX</span>
        </div>
        <div className="product-info-variations">
          <div className="product-info-variations-header">
            <label className="product-info-variations-label">-- Product Options --</label>
          </div>
        </div>
        <div className="product-info-fulfillment">
          <div className="product-info-fulfillment-option-one">FREE Shipping: Get it by Thu, Dec 12</div>
          <div className="product-info-fulfillment-option-two"><strong>Want it tomorrow? </strong>Choose Next-Day Delivery in checkout to 73301.</div>
          <div className="product-info-fulfillment-option-three"> <strong>Store Pickup:</strong>Order now and South Austin will have it ready for pickup by Thu, Dec 12. Available today at a store 9 miles away.</div>
        </div>


        <div className="product-info-cart">
          
          <button className="product-info-cart-button"><i className="fas fa-shopping-cart"></i>Add to Cart</button>
          <div className="product-info-cart-aux">
            <div className="product-info-compare">
              <i className="product-info-compare-checkbox"></i>
                Compare
            </div>
            <div className="product-info-save">
              <div className="product-info-save-for-later">
                <i className="far fa-bookmark"></i>
                <button className="product-info-save-for-later-button">
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


