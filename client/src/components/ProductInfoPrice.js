import React from 'react';

const ProductInfoPrice = (props) => {
  return (
      <div>
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
            ${props.productInfoPriceProp.price}
            </span>
        </div>
        <div className="product-info-open-box-option">
            <span className="product-info-open-box-label">Open-Box:</span>
            <span className="product-info-open-box-price">
                from ${(parseInt(props.productInfoPriceProp.price) - parseInt(props.productInfoPriceProp.price) * .25).toFixed(0)}.99
            </span>
        </div>
      </div>
  )
}


export default ProductInfoPrice;