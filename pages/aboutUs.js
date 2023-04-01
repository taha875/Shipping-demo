import React from "react";
import Header from "../components/Layout/header";
import CTAHeader from "../components/reusableUI/header/header";
import Footer from "@/components/Layout/footer";
import AboutUs from "../components/aboutUs/index";
function trackShipping() {
  return (
    <div>
      <CTAHeader heading={"About Us"} />
      <AboutUs />
    </div>
  );
}

export default trackShipping;
