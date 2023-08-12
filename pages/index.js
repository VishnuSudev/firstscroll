import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import MainBanner from "../components/HomePages/BusinessAgency/MainBanner";
import CtaAreaTwo from "../components/Common/CtaAreaTwo";
import Funfacts from "../components/HomePages/BusinessConsulting/Funfacts";
import AboutUsContent from "../components/HomePages/AppShowcase/AboutUsContent";
import CallToAction from "../components/HomePages/BusinessConsulting/CallToAction";
import ClientFeedback from "../components/HomePages/AppShowcase/ClientFeedback";
import FooterDark from "../components/Layouts/FooterDark";
import BestServices from "../components/HomePages/StartupAgencyTwo/BestServices";



const BusinessAgency = () => {
  return (
    <>
      <NavbarTwo />

      <MainBanner />

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
