import React from "react";
import Link from "next/link";

const AboutUsContent = () => {
  return (
    <>
      <div className="pb-50 overflow-hidden">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12"   style={{paddingTop:50, paddingBottom:50}}>
              <div
                className="app-about-img"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                <img src="/images/app/about-app.png" alt="about" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12"   style={{paddingTop:100, paddingBottom:50}}>
              <div className="app-about-content">
                <span className="app-sub-title">ABOUT US</span>
                <h2>Providing Marketing services for growing brands</h2>
                <p>
                Where mischief meets marketing magic! Our oddball wizards concoct ROI-driven spells, mesmerizing audiences with quirky campaigns and data-driven delights. For 10+ years, our digitally obsessed team delivers exceptional client service and ensures success in the ever-evolving marketing landscape.

                </p>

                

                

                <div className="btn-box">
                  <Link href="#" className="app-default-btn">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsContent;
