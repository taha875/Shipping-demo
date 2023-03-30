import React from "react";
import Header from "../components/header";
import CTAHeader from "../components/reusableUI/header/header";
import Footer from "@/components/footer";
import ServiceInner from "../components/serviceInner/index";
function serviceInner() {
  return (
    <div>
      <Header />
      <CTAHeader heading={"Services"} />
      <ServiceInner />
      <Footer />
    </div>
  );
}

export default serviceInner;
