import React from 'react';

const ProductInfoVariation = (props) => {
  return (
    <div>
        <div className="product-info-variations">
            <div className="product-info-variations-header">
                Available Sizes:
            </div>
                <label className="product-info-variations-label">
                    {props.productInfoVariationProp.onHand}
                </label>
        </div>
        
        <div className="product-info-variations">
            <div className="product-info-variations-header">
                Available:
            </div>
                <label className="product-info-variations-label">
                    {props.productInfoVariationProp.onHand}
                </label>
        </div>
    </div>
  )
}


export default ProductInfoVariation;
