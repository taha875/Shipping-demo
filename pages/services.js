import React from "react";
import Header from "../components/Layout/header";
import CTAHeader from "../components/reusableUI/header/header";
import Footer from "@/components/Layout/footer";
import Services from "../components/services";
function services() {
  return (
    <div>
      <CTAHeader heading={"Services"} />
      <Services />
    </div>
  );
}

export default services;
