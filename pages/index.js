import React from "react";
import Header from "../components/header";
import CTA from "../components/cta/index";
import Insurance from "../components/chooseYourInsurance/index";
import Claims from "../components/claims/index";
import Pricing from "../components/pricing/index";
import Footer from "../components/footer";
export default function Home() {
  return (
    <>
      <div className="w-full ">
        <Header />
        <CTA />
        <Insurance />
        <Claims />
        <Pricing />
        <Footer />
      </div>
    </>
  );
}
