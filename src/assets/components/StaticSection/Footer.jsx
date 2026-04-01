import React from "react";
import socialLinksImg from "../../picture/Social Links.png";

const Footer = () => {
  return (
    <div className="bg-gray-900 px-6 py-10">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {/* Box 1 */}
        <div>
          <h1 className="font-extrabold text-3xl text-amber-50 mb-4">
            DigiTools
          </h1>
          <p className="text-[12px] text-amber-50/75">
            Premium digital tools for creators, professionals, and businesses.
            Work smarter with our suite of powerful tools.
          </p>
        </div>

        {/* Box 2 */}
        <div>
          <p className="font-bold text-[14px] text-amber-50 mb-2">Product</p>
          <div className="space-y-1 text-[12px] text-amber-50/75">
            <p>Features</p>
            <p>Pricing</p>
            <p>Templates</p>
            <p>Integrations</p>
          </div>
        </div>

        {/* Box 3 */}
        <div>
          <p className="font-bold text-[14px] text-amber-50 mb-2">Company</p>
          <div className="space-y-1 text-[12px] text-amber-50/75">
            <p>About</p>
            <p>Blog</p>
            <p>Career</p>
            <p>Press</p>
          </div>
        </div>

        {/* Box 4 */}
        <div>
          <p className="font-bold text-[14px] text-amber-50 mb-2">Resources</p>
          <div className="space-y-1 text-[12px] text-amber-50/75">
            <p>Documentation</p>
            <p>Help Center</p>
            <p>Community</p>
            <p>Contact</p>
          </div>
        </div>

        {/* Box 5 */}
        <div>
          <p className="font-bold text-[14px] text-amber-50 mb-2">
            Social Links
          </p>
          <img src={socialLinksImg} alt="social links" className="w-32" />
        </div>
      </div>

      {/* copyRight Section */}
      <div className="max-w-7xl mx-auto mt-10 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center gap-3">
        <p className="text-[12px] text-amber-50/75 text-center md:text-left">
          © 2026 Digitools. All rights reserved.
        </p>

        <div className="flex gap-4 text-[12px] text-amber-50/75">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Cookies</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
