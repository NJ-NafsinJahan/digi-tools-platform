import React, { use, useState } from "react";
import AvailableProducts from "../AvailableProducts/AvailableProducts";
import YourCart from "../YourCart/YourCart";

const Products = ({ productsPromise, selectedType, setNavbarCart }) => {
  console.log(productsPromise);
  const products = use(productsPromise);
  console.log(products);

  //   const [selectedType, setSelectedType] = useState("Products");
  console.log(selectedType, "selectedType");
  return (
    <div className="container mx-auto">
      {/* <AvailableProducts products={products} /> */}
      {selectedType === "Products" ? (
        <AvailableProducts products={products} setNavbarCart={setNavbarCart} />
      ) : (
        <YourCart />
      )}
    </div>
  );
};

export default Products;
