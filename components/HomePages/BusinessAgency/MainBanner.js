import React, { useState, useEffect } from "react";
import Link from "next/link";
import Popup from "reactjs-popup";
import ContactForm from "../../Contact/ContactForm";


const MainBanner = () => {
  const [showModal, setShowModal] = useState(false);
  const slidingText = ["SEO", "Social Media", "Paid Search"];
  const [slidingName, setSlidingName] = useState(slidingText[0]);

  const changeName = () => {
    let i = 0;
    setInterval(() => {
      if (i < slidingText.length - 1) {
        i++;
      } else {
        i = 0;
      }
      setSlidingName(slidingText[i]);
    }, 3000);
  };

  useEffect(() => {
    changeName();
  }, []);

  return (
    <>
      <div className="app-main-banner">
        <div className="container">
          <div className="app-main-banner-inner" style={{ paddingTop: 100 }}>
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="content">
                  {/* <span className="sub-title">Performance First</span> */}
                  <h1>
                    We're here to grow your business through
                    <div class="scroller">
                        <span>
                        SEO<br />
                        Paid Ads<br />
                        Social Media
                        </span>
                       
                      
                    </div>
                    {/* <div class="scrolling-words-container">
                      <div class="scrolling-words-box">
                        <ul>
                          <li style="color: #ea4335">Code</li>
                          <li style="color: #4285f4">Build</li>
                          <li style="color: #34a853">Create</li>
                          <li style="color: #fbbc04">Design</li>
                          <li style="color: #ea4335">Code</li>
                        </ul>
                      </div>
                     
                    </div> */}
                  </h1>
                  <p style={{color:'white'}}>
                  we’ll get your business noticed in no time with our effective solutions.</p>
                  <p
                    onClick={() => {
                      setShowModal(true);
                    }}
                    className="app-banner-btn" style={{borderRadius:50, width:200}}
                  >
                    Contact Us &nbsp;
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


          </div>
          <Popup
            open={showModal}
            onClose={() => {
              setShowModal(false);
            }}
            contentStyle={{
              borderRadius: "10px",
              minHeight: "55%",
              minWidth: "90%",
              overflow:"scroll",
              maxHeight:"95%"
            }}
            position="right center"
          >
            <div
              style={{
                paddingTop: "20px",
                paddingBottom: "20px",
                borderRadius: 10,
              }}
            >
              <div
                onClick={() => {
                  setShowModal(false);
                }}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "10px",
                  fontSize: "20px",
                  cursor: "pointer",
                }}
              >
                &#10006;
              </div>

              <div style={{}}>
                <ContactForm />
              </div>
            </div>
          </Popup>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
