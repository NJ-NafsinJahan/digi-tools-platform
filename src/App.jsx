import { Suspense, useState } from "react";

import "./App.css";
import Navbar from "./assets/components/Navbar/Navbar";
import Banner from "./assets/components/Banner/Banner";
import PremiumSection from "./assets/components/PremiumSection/PremiumSection";
import Products from "./assets/components/Products/Products";
import Steps from "./assets/components/StaticSection/Steps";
import Pricing from "./assets/components/StaticSection/Pricing";
import Footer from "./assets/components/StaticSection/Footer";

const fetchProducts = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

function App() {
  const productsPromise = fetchProducts();
  return (
    <>
      <Navbar />
      <Banner />
      <PremiumSection />
      <Suspense
        fallback={<span className="loading loading-dots loading-xl"></span>}
      >
        <Products productsPromise={productsPromise} />
      </Suspense>
      <Steps />
      <Pricing />
      <Footer />
    </>
  );
}

export default App;
