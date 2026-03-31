import React, { use } from "react";
import AvailableProducts from "../AvailableProducts/AvailableProducts";

const Products = ({ productsPromise }) => {
  console.log(productsPromise);
  const products = use(productsPromise);
  console.log(products);
  return (
    <div className="container mx-auto">
      <AvailableProducts products={products} />
    </div>
  );
};

export default Products;
