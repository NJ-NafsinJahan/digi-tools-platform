import React from "react";
import { toast } from "react-toastify";

const YourCart = ({
  selectedYourCard,
  setSelectedYourCard,
  setNavbarCart,
  navbarCart,
}) => {
  const handelDeleteSelectedCart = (product) => {
    const filterProducts = selectedYourCard.filter(
      (selectedProduct) => selectedProduct.productName !== product.productName,
    );

    setSelectedYourCard(filterProducts);
    setNavbarCart(navbarCart - 1);
    toast.error("Item removed from cart!");
  };

  const total = selectedYourCard.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="max-w-3xl mx-auto p-4 sm:p-6">
      <div className="bg-gray-100 rounded-2xl p-4 sm:p-6 shadow">
        <h1 className=" text-[#101727] text-[24px] font-bold sm:text-2xl  mb-4">
          Your Cart
        </h1>

        <div className="space-y-4">
          {selectedYourCard.map((product) => (
            <div
              key={product.id}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-amber-50 p-4 rounded-xl"
            >
              <div className="flex items-center gap-4">
                <img
                  className="w-12 h-12 rounded-full object-cover"
                  src={product.productIcon}
                  alt=""
                />
                <div>
                  <h2 className="font-medium">{product.productName}</h2>
                  <p className="text-gray-500 text-sm">${product.price}</p>
                </div>
              </div>

              <button
                className="text-[#FF3980] font-bold text-[16px] self-end sm:self-auto"
                onClick={() => handelDeleteSelectedCart(product)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Total */}
        <div className="flex justify-between items-center mt-6 text-lg font-semibold">
          <p className="text-[#627382] ">Total:</p>
          <p>${total}</p>
        </div>

        {/* Button */}
        <button className="w-full mt-4 py-3 rounded-full text-white font-medium  bg-linear-to-r from-[#4F39F6] to-[#9514FA]  transition">
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
};

export default YourCart;
