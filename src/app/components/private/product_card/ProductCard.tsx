"use client";
import React from "react";

function ProductCard(props: any) {
  const { productDetails } = props;

  console.log({ productDetails });

  return (
    <div className="bg-red-400">
      <div>{productDetails.title}</div>
      <div>{productDetails.description}</div>
      <div>{productDetails.price}</div>
      <div>{productDetails.discountPercentage}</div>
      <div>{productDetails.rating}</div>
    </div>
  );
}

export default ProductCard;
