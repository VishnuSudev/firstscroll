import React, { useState } from "react";
import Link from "next/link";
import ContactForm from "../../Contact/ContactForm";
import Popup from "reactjs-popup";

const AboutUsContent = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="pb-50 overflow-hidden" id="aboutus">
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
                <span className="app-sub-title">Who We Are</span>
                <h2>Providing Marketing services for growing brands</h2>
                <p>
                Where mischief meets marketing magic! Our oddball wizards concoct ROI-driven spells, mesmerizing audiences with quirky campaigns and data-driven delights. For 10+ years, our digitally obsessed team delivers exceptional client service and ensures success in the ever-evolving marketing landscape.

                </p>

                

                

                <div className="btn-box">
                  <Link href="#" className="app-default-btn" onClick={() => {
                  setShowModal(true)
                }}>
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <Popup
            open={showModal}
            onClose={() => {
              setShowModal(false);
            }}
            contentStyle={{
              borderRadius: "10px",
              minHeight:"55%",
              minWidth:"75%"
            }}
            position="right center"
          >
            <div
              style={{
                padding: "20px",
                borderRadius: 10,
              }}
            >
              <div 
              onClick={()=>{
                setShowModal(false);
              }}
              style={{
                position:"absolute",
                right:"10px",
                top:"10px",
                fontSize:"20px",
                cursor:"pointer"
              }}>
               &#10006;
              </div>
              
              <div style={{
            
              }}><ContactForm/></div>
            </div>
          </Popup>
        </div>
      </div>
    </>
  );
};

export default AboutUsContent;
