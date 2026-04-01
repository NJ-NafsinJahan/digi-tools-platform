import React from "react";
import logo from "../../picture/DigiTools.png";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm px-4 md:px-10 lg:px-30 py-4 md:py-6">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>

            {/* ********** */}
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow mb-4"
            >
              <button className="text-[#101727]"> Products </button>
              <button className="text-[#101727]"> Features </button>
              <button className="text-[#101727]"> Pricing </button>
              <button className="text-[#101727]"> Testimonials </button>
              <button className="text-[#101727]"> FAQ </button>
            </ul>
            {/* ************** */}
          </div>

          <img src={logo} alt="" className="w-32 md:w-auto" />
        </div>

        <div className="navbar-center hidden lg:flex gap-8 px-8">
          <button className="navbar-center font-semibold text-[18px] text-[#101727]">
            Products
          </button>
          <button className="font-semibold text-[18px] text-[#101727]">
            Features
          </button>
          <button className="font-semibold text-[18px] text-[#101727]">
            Pricing
          </button>
          <button className="font-semibold text-[18px] text-[#101727]">
            Testimonials
          </button>
          <button className="font-semibold text-[18px] text-[#101727]">
            FAQ
          </button>
        </div>

        <div className="navbar-end gap-2 md:gap-4">
          <div className="p-2 text-lg">
            <FiShoppingCart />
          </div>

          <button className="font-semibold text-[14px] md:text-[18px] text-[#101727]">
            Login
          </button>

          <button className="btn font-semibold text-[14px] md:text-[18px] text-white rounded-4xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] border-none px-3 md:px-4 py-4 md:py-6">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
