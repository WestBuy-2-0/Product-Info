import React from "react";
import ProductInfoFulfillment from "./ProductInfoFulfillment";
import ProductInfoPrice from "./ProductInfoPrice";
import ProductInfoVariation from "./ProductInfoVariation";

const ProductInfoCart = props => {
  let productInfoCartAndFulfillment;

  if (props.productInfoCartProp.onHand > 0) {
    productInfoCartAndFulfillment = (
      <div>
        <ProductInfoFulfillment selectedProductTime={props.selectedProductTime} />
        <div className="product-info-cart">
          <button className="product-info-cart-button">
            <img src="./wagon.svg" className="product-info-wagon"></img>
            Add to Wagon
          </button>
        </div>
      </div>
    )
  } else {
    productInfoCartAndFulfillment = <></>
  }





  return (
    <div className="product-info-column-two">


      <ProductInfoPrice productInfoPriceProp={props.productInfoCartProp} />
      <ProductInfoVariation
        productInfoVariationProp={props.productInfoCartProp}
        selectedProductOptions={props.selectedProductOptions}
      />

      {productInfoCartAndFulfillment}
      <div className="product-info-cart-aux">
            <div className="product-info-compare">
              <i className="product-info-compare-checkbox"></i>
              <span className="product-info-compare-text">Compare</span>
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
  );
};

export default ProductInfoCart;
