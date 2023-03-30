import React from "react";
import Header from "../components/header";
import CTAHeader from "../components/reusableUI/header/header";
import Footer from "@/components/footer";
import Calculator from "../components/calculator/index";
function calculatePrice() {
  return (
    <>
      <Header />
      <CTAHeader heading={"Get A Quote"} />
      <Calculator />
      <Footer />
    </>
  );
}

export default calculatePrice;
