import React from "react";
import cardImg1 from "../../picture/writing.png";
import Card from "../Card/Card";

const AvailableProducts = ({ products, setNavbarCart, navbarCart }) => {
  console.log(products, "products");
  return (
    <div className="px-4 md:px-8 lg:px-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => {
          console.log(product, "product");
          return (
            <Card
              product={product}
              setNavbarCart={setNavbarCart}
              navbarCart={navbarCart}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AvailableProducts;
