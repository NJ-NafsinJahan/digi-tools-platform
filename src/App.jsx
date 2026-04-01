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
  const [selectedType, setSelectedType] = useState("Products");
  console.log(selectedType, "selectedType");
  const [navbarCart, setNavbarCart] = useState(0);

  return (
    <>
      <Navbar navbarCart={navbarCart} />

      <Banner />
      <PremiumSection
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />
      <Suspense
        fallback={<span className="loading loading-dots loading-xl"></span>}
      >
        <Products
          productsPromise={productsPromise}
          selectedType={selectedType}
          setNavbarCart={setNavbarCart}
          navbarCart={navbarCart}
        />
      </Suspense>
      <Steps />
      <Pricing />
      <Footer />
    </>
  );
}

export default App;
