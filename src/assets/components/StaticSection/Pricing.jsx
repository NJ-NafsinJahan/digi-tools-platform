import React from "react";

const Pricing = () => {
  return (
    <section className="flex flex-col items-center py-12 px-4">
      {/* Section Title */}
      <div className="text-center mb-10 max-w-2xl">
        <h2 className="font-extrabold text-4xl text-[#101727]">
          Simple, Transparent Pricing
        </h2>
        <p className="text-[#627382] mt-2">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 w-full max-w-6xl">
        {/* 1st Card */}
        <div className="card flex-1">
          <div className="card-body flex-1 border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-2xl">
            <div className="">
              <h2 className="text-3xl font-bold text-[#101727]">Starter</h2>
              <p className="font-normal text-[16px] text-[#627382]">
                Perfect for getting started
              </p>
            </div>
            <span className="text-2xl text-[#101727] font-bold">
              $0 <span className="text-[#627382]">/mo</span>
            </span>
            <ul className="mt-6 flex flex-col gap-2 text-xs text-[#627382]">
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
                <span>Access to 10 free tools</span>
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
                <span>Basic templates</span>
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
                <span>Community support</span>
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
                <span>1 project per month</span>
              </li>
            </ul>
            <div className="mt-6">
              <button className="btn btn-primary btn-block font-normal text-[14px] text-white rounded-4xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] border-none ">
                Get Started Free
              </button>
            </div>
          </div>
        </div>

        {/* Pro Card */}
        <div className="card flex-1 relative">
          <div className="card-body  bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-2xl">
            {/* Most Popular Badge */}
            <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 badge badge-xs badge-warning px-5 py-2 bg-[#FEF3C6] text-[#BB4D00] text-[14px] border-none rounded-full shadow-lg h-8 ">
              Most Popular
            </span>

            <div className="">
              <h2 className="text-3xl font-bold text-amber-100">Pro</h2>
              <p className="font-normal text-[16px] text-amber-100">
                Best for professionals
              </p>
            </div>
            <span className="text-2xl text-amber-100 font-bold">$29/mo</span>
            <ul className="mt-6 flex flex-col gap-2 text-xs text-amber-100">
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
                <span>AI-driven image enhancements</span>
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
                <span>Cloud sync</span>
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
                <span>Advanced analytics</span>
              </li>
            </ul>
            <div className="mt-6">
              <button className="btn btn-primary btn-block bg-amber-50 rounded-3xl">
                <span className="text text-[14px] bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-bold">
                  Start Pro Trial
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* 3rd Card */}
        <div className="card flex-1">
          <div className="card-body flex-1 border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-2xl">
            <div className="">
              <h2 className="text-3xl font-bold text-[#101727]">Enterprise</h2>
              <p className="font-normal text-[16px] text-[#627382]">
                For teams and businesses
              </p>
            </div>
            <span className="text-2xl text-[#101727] font-bold">
              $99 <span className="text-[#627382]">/month</span>
            </span>
            <ul className="mt-6 flex flex-col gap-2 text-xs text-[#627382]">
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
                <span>Everything in Pro</span>
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
                <span>Team collaboration</span>
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
                <span>Custom integrations</span>
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
                <span>Dedicated support</span>
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
                <span>SLA guarantee</span>
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
                <span>Custom branding</span>
              </li>
            </ul>
            <div className="mt-6">
              <button className="btn btn-primary btn-block font-normal text-[14px] text-white rounded-4xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] border-none ">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
