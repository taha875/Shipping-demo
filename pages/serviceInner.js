import React from "react";
import Header from "../components/Layout/header";
import CTAHeader from "../components/reusableUI/header/header";
import Footer from "@/components/Layout/footer";
import ServiceInner from "../components/serviceInner/index";
function serviceInner() {
  return (
    <div>
      <CTAHeader heading={"Services"} />
      <ServiceInner />
    </div>
  );
}

export default serviceInner;
