import React from "react";
import Navbar from "../components/Layouts/Navbar";
import MainBanner from "../components/DefaultHome/MainBanner";
import Services from "../components/DefaultHome/Services";
import About from "../components/DefaultHome/About";
import OurWorks from "../components/DefaultHome/OurWorks";
import WorkProcess from "../components/DefaultHome/WorkProcess";
import Feedback from "../components/Common/Feedback";
import Team from "../components/Common/Team";
import FunFacts from "../components/Common/FunFacts";
import LatestNewsSlider from "../components/Common/LatestNewsSlider";
import CtaArea from "../components/Common/CtaArea";
import Partner from "../components/Common/Partner";
import Footer from "../components/Layouts/Footer";

const Index = () => {
  return (
    <>
      <Navbar />

      <MainBanner />

      <Services />

      <About />

      <OurWorks />

      <WorkProcess />

      <Feedback />

      <Team />

      <FunFacts />

      <LatestNewsSlider />

      <CtaArea />

      <Partner />

      <Footer />
    </>
  );
};

export default Index;
