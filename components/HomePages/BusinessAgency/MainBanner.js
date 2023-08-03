import React, { useState } from "react";
import Link from "next/link";
import Popup from "reactjs-popup";
import ContactForm from "../../Contact/ContactForm";

const MainBanner = () => {
  const [showModal, setShowModal] = useState(false);
  
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
                  <p onClick={() => {
                        setShowModal(true);
                      }} className="app-banner-btn">
                    Let's talk
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </p>
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

export default MainBanner;
