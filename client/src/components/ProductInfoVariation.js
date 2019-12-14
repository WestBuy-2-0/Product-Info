import React from "react";

const ProductInfoVariation = props => {
  let productInfoVariationOne;
  let productInfoVariationTwo;

  if (props.productInfoVariationProp.options !== null) {
    productInfoVariationOne = (
      <div className="product-info-variations">
        <div className="product-info-variations-header">Available Sizes:</div>
        <label className="product-info-variations-label">
          {props.productInfoVariationProp.options}
        </label>
      </div>
    );
  } else {
    productInfoVariationOne = undefined;
  }

  if (props.productInfoVariationProp.onHand < 1) {
    productInfoVariationTwo = (
      <div className="product-info-variations">
        <div className="product-info-variations-header">Out of Stock!</div>
      </div>
    );
  } else {
    productInfoVariationTwo = (
      <div className="product-info-variations">
        <div className="product-info-variations-header">In Stock!</div>
      </div>
    );
  }

  return (
    <div>
      {productInfoVariationOne}
      {productInfoVariationTwo}
    </div>
  );
};

export default ProductInfoVariation;
