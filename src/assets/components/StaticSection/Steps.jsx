import React from "react";
import UserImg from "../../picture/user.png";
import packageImg from "../../picture/package.png";
import rocketImg from "../../picture/rocket.png";

const Steps = () => {
  return (
    <>
      <div className="">
        <div>
          <h1 className="font-extrabold text-4xl text-[#101727] ">
            Get Started in 3 Steps
          </h1>
          <p className="text-[#627382]">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        {/* 3 steps */}

        <div className=" ">
          <div className=" flex justify-between ">
            <div className="card bg-base-100 w-96 shadow-sm">
              {/* step 1 */}
              <div className="card-body items-center text-center">
                <p className="badge badge-xs text-white rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] border-none absolute top-2 right-2 font-normal text-[12px] m-1 p-1 ">
                  01
                </p>
                <img className="h-18 w-18" src={UserImg} alt="" />
                <h2 className="card-title font-bold text-2xl text-[#101727]">
                  Create Account
                </h2>
                <p className="text-[#627382]">
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts
                </p>
              </div>

              {/* step 2 */}
              <div className="card-body items-center text-center">
                <p className="badge badge-xs text-white rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] border-none absolute top-2 right-2 font-normal text-[12px] m-1 p-1 ">
                  01
                </p>
                <img className="h-18 w-18" src={rocketImg} alt="" />
                <h2 className="card-title font-bold text-2xl text-[#101727]">
                  Start Creating
                </h2>
                <p className="text-[#627382]">
                  Download and start using your premium tools immediately.
                </p>
              </div>

              {/* step 3 */}
              <div className="card-body items-center text-center">
                <p className="badge badge-xs text-white rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] border-none absolute top-2 right-2 font-normal text-[12px] m-1 p-1 ">
                  01
                </p>
                <img className="h-18 w-18" src={packageImg} alt="" />
                <h2 className="card-title font-bold text-2xl text-[#101727]">
                  Create Account
                </h2>
                <p className="text-[#627382]">
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Steps;
