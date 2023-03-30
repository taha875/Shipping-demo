import React from "react";
import Header from "../components/header";
import CTAHeader from "../components/reusableUI/header/header";
import Footer from "@/components/footer";
import ContactUS from "../components/contactUs/findUs";
import Contact from "../components/contactUs/contactUs";
function contactUs() {
  return (
    <>
      <Header />
      <CTAHeader heading={"Contact Us"} />
      <ContactUS />
      <Contact />
      <Footer />
    </>
  );
}

export default contactUs;
