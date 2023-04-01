import React from "react";
import Header from "../components/Layout/header";
import LandingPage from "@/components/landingPage/LandingPage";
import Footer from "@/components/Layout/footer";
export default function Home() {
  return (
    <>
      <div className="w-full ">
        <LandingPage />
      </div>
    </>
  );
}
