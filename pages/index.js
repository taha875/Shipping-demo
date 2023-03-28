import React from "react";
import Header from "../components/header";
import CTA from "../components/cta/index";
import Shipping from "../components/shipping/index";
import WeCanShip from "../components/WeCanShipAnything/index";
import OurAdvantages from "../components/ourAdvantages/index";
import Stats from "../components/Stats/index";
import Footer from "@/components/footer";
export default function Home() {
  return (
    <>
      <div className="w-full ">
        <Header />
        <CTA />
        <div className="w-full flex items-center justify-center">
          <div className="w-96 h-1 bg-yellow-500 my-20"></div>
        </div>

        <Shipping />
        <div className="w-full flex items-center justify-center">
          <div className="w-96 h-1 bg-yellow-500 my-20"></div>
        </div>
        <WeCanShip />
        <div className="w-full flex items-center justify-center">
          <div className="w-96 h-1 bg-yellow-500 my-20"></div>
        </div>
        <OurAdvantages />
        <div className="w-full flex items-center justify-center">
          <div className="w-96 h-1 bg-yellow-500 my-20"></div>
        </div>
        <Stats />
        <div className="w-full flex items-center justify-center">
          <div className="w-96 h-1 bg-yellow-500 my-20"></div>
        </div>
        {/*<Insurance />
        <Claims />
        <Pricing /> */}
        <Footer />
      </div>
    </>
  );
}
