import React from "react";
import Link from "next/link";
import LatestNewsSliderTwo from "../../Common/LatestNewsSliderTwo";

const CallToAction = () => {
  return (
    <>
      <div className="call-to-action-area bg-image ptb-100" style={{height:600,marginBottom:250}}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div 
                className="call-to-action-content"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <h6>Our Blogs</h6>
                <h2>
                Industry Insights
                </h2>
              </div>
            </div>

            
            <div className="col-lg-6 col-md-12">
              <div 
                className="call-to-action-content"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <p style={{color:'white'}}>
                Learn from First Scroll and stay updated on industry insights and trends

                </p>
              </div>
            
            </div>
          </div>
        </div>
        <div className="container pb-100" style={{paddingTop:50}}>
          <LatestNewsSliderTwo />
        </div>
      </div>
    </>
  );
};

export default CallToAction;
