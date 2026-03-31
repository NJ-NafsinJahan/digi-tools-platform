import { useState } from "react";

import "./App.css";
import Navbar from "./assets/components/Navbar/Navbar";
import Banner from "./assets/components/Banner/Banner";
import PremiumSection from "./assets/components/PremiumSection/PremiumSection";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <PremiumSection />
    </>
  );
}

export default App;
