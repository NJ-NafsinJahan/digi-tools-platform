import React, { useState } from "react";

const Card = ({
  product,
  setNavbarCart,
  navbarCart,
  selectedYourCard,
  setSelectedYourCard,
}) => {
  const [selectedType, setSelectedType] = useState(false);

  const handelChooseProduct = () => {
    alert(`${product.productName} is selected`);
    setSelectedType(true);
    setNavbarCart(navbarCart + 1);

    setSelectedYourCard([...selectedYourCard, product]);
  };
  return (
    <>
      {/* for product card */}
      <div className="card bg-base-100 shadow-sm">
        <div className="card-body flex justify-between ">
          <span className="badge badge-xs badge-warning absolute top-2 right-2 font-normal text-[10px] m-1">
            {product.tagType}
          </span>
          <img className="h-9 w-9" src={product.productIcon} alt="" />
          <br />
          <h2 className="text-2xl font-bold">{product.productName}</h2>
          <p className=" font-normal text-[14px] text-[#627382] ">
            {product.productDescription}
          </p>
          <div className="flex justify-between gap-0.5">
            <span className="text-xl ">
              $ {product.price}
              <span className="text-[14px] text-[#627382]">
                / {product.period}
              </span>
            </span>
          </div>
          <ul className="mt-6 flex flex-col gap-2 text-xs">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>High-resolution image generation</span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Customizable style templates</span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Batch processing capabilities</span>
            </li>
          </ul>
          <div className="mt-6">
            <button
              className="btn btn-primary btn-block font-semibold text-[18px] text-white rounded-4xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] border-none disabled:from-green-700 disabled:to-green-500 "
              onClick={handelChooseProduct}
              disabled={selectedType ? true : false}
            >
              {selectedType === true ? "Added to Cart!" : "Buy Now"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
