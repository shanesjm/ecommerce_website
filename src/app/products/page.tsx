import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

function Products(props: any) {
  console.log({ props });

  return (
    <div>
      Products Listing components
      <Link href="products/1"> product 1</Link>
    </div>
  );
}

export default Products;
