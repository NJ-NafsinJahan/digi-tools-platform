import React from "react";
import bannerImg from "../../picture/banner.png";
import bannerDot from "../../picture/bannerDot.png";
import play from "../../picture/Play.png";

const Banner = () => {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row justify-between items-center m-6 container gap-6">
        <div className="h-90 w-full md:w-3xl text-center md:text-left">
          <button className="btn bg-[#E1E7FF] rounded-3xl m-4 flex items-center gap-2 mx-auto md:mx-4">
            <img src={bannerDot} alt="" />
            <span className="text text-[18px] bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-bold">
              New: AI-Powered Tools Available
            </span>
          </button>

          <h1 className="text-3xl md:text-6xl text-[#101727] font-extrabold m-4">
            Supercharge Your <br /> Digital Workflow
          </h1>

          <p className="font-normal text-[14px] md:text-[16px] text-[#627382] m-4">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today. Explore
            Products
          </p>

          <div className="m-4 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="btn font-semibold text-[18px] text-white rounded-4xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] border-none px-4 py-6">
              Explore Products
            </button>

            <button className="btn rounded-4xl border-2 px-4 py-6 flex items-center gap-2 justify-center">
              <img src={play} alt="" />
              <span className="text text-[18px] bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-bold">
                Watch Demo
              </span>
            </button>
          </div>
        </div>

        <div className="w-full md:w-auto flex justify-center">
          <img
            src={bannerImg}
            alt=""
            className="w-full max-w-md md:max-w-full"
          />
        </div>
      </div>

      <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] flex flex-col md:flex-row justify-center items-center h-auto md:h-35 mb-14 py-6 md:py-0 text-center md:text-left">
        <div className="p-4 flex items-center">
          <div>
            <h1 className="font-extrabold text-3xl text-amber-50">50K+</h1>
            <p className="font-normal text-[12px] text-amber-50/75">
              Active Users
            </p>
          </div>
          <div className="hidden md:block h-10 border-r border-gray-200/75 mx-4"></div>
        </div>

        <div className="p-4 flex items-center">
          <div>
            <h1 className="font-extrabold text-3xl text-amber-50">200+</h1>
            <p className="font-normal text-[12px] text-amber-50/75">
              Premium Tools
            </p>
          </div>
          <div className="hidden md:block h-10 border-r border-gray-200/75 mx-4"></div>
        </div>

        <div className="p-4">
          <h1 className="font-extrabold text-3xl text-amber-50">4.9</h1>
          <p className="font-normal text-[12px] text-amber-50/75">Rating</p>
        </div>
      </div>
    </>
  );
};

export default Banner;
