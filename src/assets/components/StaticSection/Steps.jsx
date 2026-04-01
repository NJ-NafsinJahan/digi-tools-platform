import React from "react";
import UserImg from "../../picture/user.png";
import packageImg from "../../picture/package.png";
import rocketImg from "../../picture/rocket.png";

const Steps = () => {
  return (
    <section className="flex flex-col items-center bg-[#f0f1f34e] py-10 px-4">
      {/* Title */}
      <div className="text-center mb-10">
        <h1 className="font-extrabold text-4xl text-[#101727]">
          Get Started in 3 Steps
        </h1>
        <p className="text-[#627382] mt-2">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      {/* Steps Cards */}
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 w-full max-w-5xl">
        {/* Step 1 */}
        <div className="card flex-1 bg-white shadow-md rounded-xl p-6 text-center relative">
          <p className="badge badge-xs text-white rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] absolute top-3 right-3 text-[12px] font-normal px-2 py-1">
            01
          </p>
          <img className="mx-auto h-16 w-16 mb-4" src={UserImg} alt="Step 1" />
          <h2 className="font-bold text-2xl mb-2 text-[#101727]">
            Create Account
          </h2>
          <p className="text-[#627382] text-sm">
            A card component has a figure, a body part, and inside body there
            are title and actions parts.
          </p>
        </div>

        {/* Step 2 */}
        <div className="card flex-1 bg-white shadow-md rounded-xl p-6 text-center relative">
          <p className="badge badge-xs text-white rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] absolute top-3 right-3 text-[12px] font-normal px-2 py-1">
            02
          </p>
          <img
            className="mx-auto h-16 w-16 mb-4"
            src={rocketImg}
            alt="Step 2"
          />
          <h2 className="font-bold text-2xl mb-2 text-[#101727]">
            Start Creating
          </h2>
          <p className="text-[#627382] text-sm">
            Download and start using your premium tools immediately.
          </p>
        </div>

        {/* Step 3 */}
        <div className="card flex-1 bg-white shadow-md rounded-xl p-6 text-center relative">
          <p className="badge badge-xs text-white rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] absolute top-3 right-3 text-[12px] font-normal px-2 py-1">
            03
          </p>
          <img
            className="mx-auto h-16 w-16 mb-4"
            src={packageImg}
            alt="Step 3"
          />
          <h2 className="font-bold text-2xl mb-2 text-[#101727]">
            Download Tools
          </h2>
          <p className="text-[#627382] text-sm">
            Access your purchased products and start using them immediately.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Steps;
