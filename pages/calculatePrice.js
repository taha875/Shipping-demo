import React from "react";
import Header from "../components/Layout/header";
import CTAHeader from "../components/reusableUI/header/header";
import Footer from "@/components/Layout/footer";
import Calculator from "../components/calculator/index";
function calculatePrice() {
  return (
    <>
      <CTAHeader heading={"Get A Quote"} />
      <Calculator />
    </>
  );
}

export default calculatePrice;
