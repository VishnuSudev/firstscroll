import React, { useState } from "react";
import Link from "next/link";

const MainBanner = () => {
  
  return (
    <>
      <div className="app-main-banner">
        <div className="container">
          <div className="app-main-banner-inner"  style={{paddingTop:80}}>
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="content">
                  <span className="sub-title">
                    Performance First
                  </span>
                  <h1>
                  Data Driven: Where Performance Takes the Lead
                  </h1>
                  {/* <p>
                  We excel in impactful campaigns for Health & Beauty, Food & Beverage, and FMCG sectors, E-commerce, and others. From global brand activations to local challenger brands, our focus remains on thoughtful, performance-led social executions.</p> */}
                  <Link href="#" className="app-banner-btn">
                    Contact Us {" "}
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div
                  className="image"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <img src="/images/app/mobile-app.png" alt="banner-img" />
                </div>
              </div>
            </div>

            {/* Shape Images */}
            <div className="app-banner-shape1">
              <img src="/images/app/shape1.png" alt="image" />
            </div>
            <div className="app-banner-shape2">
              <img src="/images/app/shape2.png" alt="image" />
            </div>
            <div className="app-banner-shape3">
              <img src="/images/app/shape2.png" alt="image" />
            </div>
            <div className="app-banner-shape4">
              <img src="/images/app/shape3.png" alt="image" />
            </div>
            <div className="app-banner-shape5">
              <img src="/images/app/shape4.png" alt="image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
