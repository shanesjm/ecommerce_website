import { ProductType } from "@/app/types/types";
import Image from "next/image";
import React from "react";

function ProductCard(props: any) {
  const { productDetails } = props;

  // console.log({ productDetails });

  return (
    <>
      <div className="rounded-lg flex max-w-[300px] max-h-[400px]bg-slate-100">
        <div>
          <Image
            src={productDetails.thumbnail}
            alt="new-arrivals images"
            width={0}
            height={0}
            // width={300}
            // height={300}
            // layout="fill"
            sizes="100vw"
            style={{ width: "284px", height: "200px" }}
            // style={{ width: "100%" }}
          />
          <h4 className="text-center text-lg p-5">{productDetails.title}</h4>
          <h4 className="text-center text-lg p-5">
            <span className="h-1">$</span>
            {productDetails.price}
          </h4>
          <button className="w-full rounded-b-lg rounded-bl-lg bg-yellow-700 h-10">
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
