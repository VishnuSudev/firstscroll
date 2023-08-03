import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import ErrorContent from "../components/Error/ErrorContent";
import FooterDark from "../components/Layouts/FooterDark";

const Error = () => {
  return (
    <>
      <NavbarTwo />

      <PageBanner pageTitle="404 Error" BGImage="/images/page-banner3.jpg" />

      <ErrorContent />

      <FooterDark />
    </>
  );
};

export default Error;
