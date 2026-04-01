import React, { useState } from "react";
import { use } from "react";
import Products from "../Products/Products";

const PremiumSection = ({ selectedType, setSelectedType }) => {
  return (
    <>
      {/* div for card banner */}
      <div className="flex flex-col justify-center items-center gap-4 p-4">
        <h1 className="font-extrabold text-4xl text-[#101727] ">
          Premium Digital Tools
        </h1>
        <p className="font-normal text-[16px] text-[#627382] py-2 ">
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>

        {/* for button div */}
        <div className=" mb-15">
          <button
            onClick={() => setSelectedType("Products")}
            className={`btn ${selectedType === "Products" ? " text-amber-100 rounded-r-none rounded-l-4xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] border" : "text-black border rounded-r-none rounded-l-4xl "}  font-semibold text-[18px] px-6 py-6`}
          >
            Products
          </button>
          <button
            onClick={() => setSelectedType("Cart")}
            className={`btn ${selectedType === "Cart" ? " text-amber-100  rounded-l-none rounded-r-4xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] border" : " text-black  border rounded-l-none rounded-r-4xl "} font-semibold text-[18px] px-7 py-6`}
          >
            {/* Cart (0) */}
            Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default PremiumSection;
