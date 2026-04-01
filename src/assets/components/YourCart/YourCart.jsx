import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { toast } from "react-toastify";

const YourCart = ({
  selectedYourCard,
  setSelectedYourCard,
  setNavbarCart,
  navbarCart,
}) => {
  const [showEmpty, setShowEmpty] = useState(false);

  const handelDeleteSelectedCart = (product) => {
    const filterProducts = selectedYourCard.filter(
      (selectedProduct) => selectedProduct.productName !== product.productName,
    );

    setSelectedYourCard(filterProducts);
    setNavbarCart(navbarCart - 1);

    toast.error("Item removed from cart!");
  };

  const total = selectedYourCard.reduce((sum, item) => sum + item.price, 0);

  const handleProceed = () => {
    if (selectedYourCard.length === 0) {
      setShowEmpty(true);
      toast.error("Your cart is empty!");
    } else {
      setShowEmpty(true);
      toast.success("Proceeding to checkout!");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4 sm:p-6">
      <div className="bg-gray-100 rounded-2xl p-4 sm:p-6 shadow">
        <h1 className="text-xl sm:text-2xl font-bold text-[24px] mb-4 text-[#101727]">
          Your Cart
        </h1>

        {selectedYourCard.length === 0 || showEmpty ? (
          <div className="flex flex-col items-center justify-center py-16 text-gray-400">
            <span className="text-5xl">
              <FiShoppingCart />
            </span>
            <p className="mt-4">Your cart is empty</p>
          </div>
        ) : (
          <>
            <div className="space-y-4">
              {selectedYourCard.map((product) => (
                <div
                  key={product.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 rounded-xl"
                >
                  <div className="flex items-center gap-4">
                    <img
                      className="w-12 h-12 rounded-full"
                      src={product.productIcon}
                      alt=""
                    />
                    <div>
                      <h2 className="font-medium">{product.productName}</h2>
                      <p className="text-gray-500 text-[16px]">
                        ${product.price}
                      </p>
                    </div>
                  </div>

                  <button
                    className="text-[#FF3980] text-[16px] font-bold"
                    onClick={() => handelDeleteSelectedCart(product)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center mt-6 text-lg font-semibold">
              <p className="text-[#627382] font-normal text-[16px]">Total:</p>
              <p>${total}</p>
            </div>

            <button
              onClick={handleProceed}
              className="w-full mt-4 py-3 rounded-full text-[#FFFFFF] font-[16px] bg-linear-to-r from-[#4F39F6] to-[#9514FA] border-none"
            >
              Proceed To Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default YourCart;
