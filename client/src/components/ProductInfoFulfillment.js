import React from "react";
import ProductInfo from "./ProductInfo";

const ProductInfoFulfillment = props => {
  return (
    <div className="product-info-fulfillment">
      <div className="product-info-fulfillment-option-one">
        FREE Shipping: Get it by {props.selectedProductTime}
      </div>
      {/* <div className="product-info-fulfillment-option-two">
        <strong>Want it tomorrow? </strong>Choose Next-Day Delivery does not exist at West Buy. See era details.
      </div> */}
      <div className="product-info-fulfillment-option-two">
        <strong>Want it via Pony Express? </strong>Choose Pony-Express Delivery in checkout
        to 78701 and get it by {props.selectedProductPonyTime}.
      </div>
      <div className="product-info-fulfillment-option-two">
        <strong>Want it by Rail? </strong>Choose Delivery by Rail in checkout
        to 78701 and get it by {props.selectedProductRailTime}.
      </div>
      <div className="product-info-fulfillment-option-three">
        {" "}
        <strong>Store Pickup:</strong> If you're willing to make the trek to one of our outposts order now and the nearest location will have it
        ready for pickup by {props.selectedProductTime}. Available today at a
        store {Math.floor(Math.random() * Math.floor(16) + 1)} miles away.
      </div>
    </div>
  );
};

export default ProductInfoFulfillment;
