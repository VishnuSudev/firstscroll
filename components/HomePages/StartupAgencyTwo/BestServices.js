import React from "react";
import FeaturedServices from "../StartupAgencyTwo/FeaturedServices";


const BestServices = () => {
  return (
    <>
      <section id="services" className="services-area">
        <div className="container">
          <div className="row m-0">
          <div className="col-lg-4 ptb-100">
              <div className="">
                <div className="services-section-title">
                  <h6>Our Services</h6>
                  <h2>We help you solve your problem through our service.</h2>
                  <div className="bar"></div>
                  <p>
                  We are a brand strategy and digital marketing agency who understand the customer life-cycle like no one else.

                  </p>
                  {/* <div class="btn-box"><a class="app-default-btn" href="/#aboutus/">Our Happy Clients</a></div> */}
                 
                </div>
              </div>
            </div>
            <div className="col-lg-8 p-0">
              <FeaturedServices />
            </div>
            


          </div>
        </div>
      </section>
    </>
  );
};

export default BestServices;
