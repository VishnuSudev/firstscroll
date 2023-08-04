import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import MainBanner from "../components/HomePages/BusinessAgency/MainBanner";
import Services from "../components/HomePages/BusinessAgency/Services";
import CtaAreaTwo from "../components/Common/CtaAreaTwo";
import Funfacts from "../components/HomePages/BusinessConsulting/Funfacts";
import Features from "../components/HomePages/BusinessConsulting/Features";
import AboutUsContent from "../components/HomePages/AppShowcase/AboutUsContent";
import CallToAction from "../components/HomePages/BusinessConsulting/CallToAction";
import ClientFeedback from "../components/HomePages/AppShowcase/ClientFeedback";
import FooterDark from "../components/Layouts/FooterDark";
import Partners from "../components/HomePages/AppShowcase/Partners";
import BestServices from "../components/HomePages/StartupAgencyTwo/BestServices";
// import './components/HomePages/BusinessAgency/scrolling.scss'



const BusinessAgency = () => {
  return (
    <>
      <NavbarTwo />

      <MainBanner />

      {/* <Features /> */}

      {/* <Partners /> */}

      {/* <Services /> */}

      <BestServices />

      <Funfacts />

      <AboutUsContent />

      <CallToAction />

      <ClientFeedback />

      <CtaAreaTwo />

      <FooterDark />
    </>
  );
};

export default BusinessAgency;
