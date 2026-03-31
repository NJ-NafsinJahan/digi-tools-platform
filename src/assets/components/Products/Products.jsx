import React, { use } from "react";

const Products = ({ productsPromise }) => {
  console.log(productsPromise);
  const data = use(productsPromise);
  console.log(data);
  return <div>Products: {data.length}</div>;
};

export default Products;
