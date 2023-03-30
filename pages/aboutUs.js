import React from "react";
import Header from "../components/header";
import CTAHeader from "../components/reusableUI/header/header";
import Footer from "@/components/footer";
import AboutUs from "../components/aboutUs/index";
function trackShipping() {
  return (
    <div>
      <Header />
      <CTAHeader
        heading={"About Us"}
       
      />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default trackShipping;
