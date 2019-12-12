import React from 'react';
import ProductInfoFulfillment from './ProductInfoFulfillment'

const ProductInfoCart = (props) => {
    return (
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
                ${props.productInfoCartProp.price}
                </span>
            </div>
            <div className="product-info-open-box-option">
                <span className="product-info-open-box-label">Open-Box:</span>
                <span className="product-info-open-box-price">
                    from ${(parseInt(props.productInfoCartProp.price) - parseInt(props.productInfoCartProp.price) * .25).toFixed(0)}.99
                </span>
            </div>
            <div className="product-info-variations">
                <div className="product-info-variations-header">
                    Available Sizes:
                </div>
                    <label className="product-info-variations-label">{props.productInfoCartProp.onHand}</label>
            </div>
            <div className="product-info-variations">
                <div className="product-info-variations-header">
                    Available:
                </div>
                    <label className="product-info-variations-label">{props.productInfoCartProp.onHand}</label>
            </div>

            <ProductInfoFulfillment />

            <div className="product-info-cart">
                <button className="product-info-cart-button"><i className="fas fa-shopping-cart"></i>Add to Wagon</button>
                <div className="product-info-cart-aux">
                <div className="product-info-compare">
                    <i className="product-info-compare-checkbox"></i>
                    <span className="product-info-compare-text">
                    Compare
                    </span>
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
    )
}

export default ProductInfoCart;

