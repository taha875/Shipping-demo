import React from "react";
import CTA from "./cta/index";
import Shipping from "./shipping/index";
import WeCanShip from "./WeCanShipAnything/index";
import OurAdvantages from "./ourAdvantages/index";
import Stats from "./Stats/index";
import Testimonials from "./testimonials/index";
import Team from "./Team/index";
import Newsletter from "./newsletter/index";
function LandingPage() {
  return (
    <>
      <CTA />
      <div className="w-full flex items-center justify-center">
        <div className="w-96 h-1 bg-yellow-500 my-20"></div>
      </div>

      <Shipping />
      <div className="w-full flex items-center justify-center">
        <div className="w-96 h-1 bg-yellow-500 my-20"></div>
      </div>
      <OurAdvantages />
      <div className="w-full flex items-center justify-center">
        <div className="w-96 h-1 bg-yellow-500 my-20"></div>
      </div>
      <WeCanShip />
      <div className="w-full flex items-center justify-center">
        <div className="w-96 h-1 bg-yellow-500 my-20"></div>
      </div>
      <Stats />
      <div className="w-full flex items-center justify-center">
        <div className="w-96 h-1 bg-yellow-500 my-20"></div>
      </div>
      <Testimonials />
      <div className="w-full flex items-center justify-center">
        <div className="w-96 h-1 bg-yellow-500 my-20"></div>
      </div>
      <Team />
      <Newsletter />
    </>
  );
}

export default LandingPage;
