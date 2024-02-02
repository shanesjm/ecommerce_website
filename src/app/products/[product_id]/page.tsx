import React from "react";

type propTypes = {
  useParam: {
    product_id: number;
  };
};
// type propTypes = any

export default function ProductDetail(props: any) {
  console.log({ props });
  return <div>product detail page</div>;
}
