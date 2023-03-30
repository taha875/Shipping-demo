import React from "react";
import Header from "../components/header";
import CTAHeader from "../components/reusableUI/header/header";
import Footer from "@/components/footer";
import Services from "../components/services";
function services() {
  return (
    <div>
      <Header />
      <CTAHeader heading={"Services"} />
      <Services />
      <Footer />
    </div>
  );
}

export default services;
