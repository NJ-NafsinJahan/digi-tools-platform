import React from "react";

const PremiumSection = () => {
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
        <div>
          <button className="btn font-semibold text-[18px] text-white rounded-4xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] border-none px-4 py-6">
            Products
          </button>
          <button className="btn font-semibold text-[18px] border-4">
            Cart
          </button>
        </div>
      </div>

      {/* div for cards */}
      <div className=""></div>
    </>
  );
};

export default PremiumSection;
