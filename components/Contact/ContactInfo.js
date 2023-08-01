import React from "react";

const ContactInfo = () => {
  return (
    <>
      <div
      id="contact"
      className="contact-info-area pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="contact-info-box">
                <div className="icon">
                  <i className="pe-7s-mail"></i>
                </div>
                <h3>Mail Here</h3>
                <p>
                  <a href="mailto:admin@freescroll.com">admin@freescroll.com</a>
                </p>
                <p>
                  <a href="mailto:info@freescroll.com">info@freescroll.com</a>
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="contact-info-box">
                <div className="icon">
                  <i className="pe-7s-map-2"></i>
                </div>
                <h3>Visit Here</h3>
                <p>
                  Bangalore, <br /> Karnataka, India
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="contact-info-box">
                <div className="icon">
                  <i className="pe-7s-call"></i>
                </div>
                <h3>Call Here</h3>
                <p className="text-red-500">
                  <a href="tel:+1234567890">+91 00000 00000</a>
                </p>
                <p>
                  <a href="tel:+2414524526">+91 00000 00000</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
