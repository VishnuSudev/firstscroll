import React, { useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import Popup from "reactjs-popup";
// import "reactjs-popup/dist/index.css";

const featuredServicesData = [
  {
    iconName: "pe-7s-graph3 bg-13c4a1",
    title: "Digital Advertising Campaigns",
    // bgText: "DA",
    shortText:
      "Amplify your brand's reach with our dynamic digital advertising campaigns across Google, Meta & YouTube, and more.",
    // viewDetails: "",
  },
  {
    iconName: "pe-7s-graph1 bg-13c4a1",
    title: "Conversion Rate Optimization",
    // bgText: "CR",
    shortText:
      "Supercharge your online success with data-driven Conversion Rate Optimization strategies tailored to your business",
    // viewDetails: "",
  },
  {
    iconName: "pe-7s-display1 bg-13c4a1",
    title: "E-commerce Strategy " ,
    // bgText: "ES",
    shortText:
      "Maximize sales and growth with our tailored E-commerce Strategy for your online business",
    // viewDetails: "/service-details",
  },
  {
    iconName: "pe-7s-rocket bg-13c4a1",
    title: "Brand Strategy",
    // bgText: "BS",
    shortText:
      "Unleash the power of your brand with our strategic expertise and creative vision",
    // viewDetails: "/service-details",
  },
  {
    iconName: "pe-7s-search bg-13c4a1",
    title: "Search Engine Optimization",
    // bgText: "SEO",
    shortText:
      "Drive organic growth and boost visibility with our expert SEO services.",
    // viewDetails: "/service-details",
  },
  {
    iconName: "pe-7s-box2 bg-13c4a1",
    title: "Product Marketing & Strategy",
    // bgText: "PM",
    shortText:
      "Elevate your product's success with our dynamic marketing strategies and effective product positioning",
    // viewDetails: "/service-details",
  },
  {
    iconName: "pe-7s-light bg-13c4a1",
    title: "Social Media Marketing",
    // bgText: "SM",
    shortText:
      "Dominate social media with our strategic marketing on Facebook, Instagram, Twitter, and more",
    // viewDetails: "/service-details",
  },
  ,
  {
    iconName: "pe-7s-monitor bg-13c4a1",
    title: "Web & App development",
    // bgText: "WAD",
    shortText:
      "Seamless web and app development – transforming your vision into remarkable digital realities.",
    // viewDetails: "/service-details",
  },
];

const FeaturedServices = () => {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState("");
  return (
    <>
      <section className="featured-services-area" style={{paddingTop:50}}  height="345">
        <div className="container">
          <div className="row" style={{ paddingRight: 30, paddingLeft: 30 }}>
            <Swiper
              spaceBetween={30}
              navigation={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                600: {
                  slidesPerView: 2,
                },
              }}
              modules={[Autoplay, Navigation]}
              className="featured-services-slides"
            >
              {featuredServicesData &&
                featuredServicesData.map((value, i) => (
                  <SwiperSlide key={i}>
                    <div className="col-lg-12">
                      <div className="featured-services-box service-card-one" style={{paddingTop:20}}>
                        <div className="icon">
                          <i className={value.iconName}></i>
                        </div>

                        <h3>
                          {value.title}
                        </h3>

                        <p>{value.shortText}</p>

                        {/* <Link
                          href={value.viewDetails}
                          className="read-more-btn"
                        >
                          Read More
                        </Link> */}

                        {/* <div className="back-text">
                          {value.bgText}
                        </div> */}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
          <Popup
            open={showModal}
            onClose={() => {
              setShowModal(false);
            }}
            contentStyle={{
              borderRadius: "10px",
              minHeight: "25%",
              minWidth: "75%",
              padding: "20px",
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
              <div>
                <p
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    fontcolor: "black",
                    textAlign: "center",
                    paddingBottom: "10px",
                  }}
                >
                  {data.title}
                </p>
              </div>
              <div
                style={{
                  paddingTop: "15px",
                }}
              >
                {data.shortText}
              </div>
            </div>
          </Popup>
        </div>
      </section>
    </>
  );
};

export default FeaturedServices;
