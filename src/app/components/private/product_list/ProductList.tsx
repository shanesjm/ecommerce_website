import { ProductType } from "@/app/types/types";
import React from "react";
import ProductCard from "../product_card/ProductCard";
import { API_BASE_URL } from "@/app/constants/Constants";

// type ProductListProps = ProductType[];

async function getProductsList() {
  const res = await fetch(`${API_BASE_URL}/products`);
  //   console.log(res.json());
  return res.json();
}

export const ProductList = async (props: any) => {
  //   console.log({ props });

  const productList = await getProductsList();

  console.log("productList", productList.products[0]);

  return (
    <>
      <div className="p-10 flex flex-wrap gap-5 justify-center">
        {productList.products.map((productDetails: any, key: any) => {
          return <ProductCard key={key} productDetails={productDetails} />;
        })}
      </div>
    </>
  );
};
