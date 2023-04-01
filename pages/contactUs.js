import React from "react";
import Header from "../components/Layout/header";
import CTAHeader from "../components/reusableUI/header/header";
import Footer from "@/components/Layout/footer";
import ContactUS from "../components/contactUs/findUs";
import Contact from "../components/contactUs/contactUs";
function contactUs() {
  return (
    <>
      <CTAHeader heading={"Contact Us"} />
      <ContactUS />
      <Contact />
    </>
  );
}

export default contactUs;
