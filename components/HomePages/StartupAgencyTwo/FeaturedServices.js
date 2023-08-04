import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css"; 

const featuredServicesData = [
  {
    iconName: "pe-7s-graph3",
    title: "Digital Advertising Campaigns",
    bgText: "DA",
    shortText:
      "Developing and managing data-driven digital advertising campaigns across various platforms...",
    viewDetails: "/service-details",
  },
  {
    iconName: "pe-7s-graph1",
    title: "Conversion Rate Optimization",
    bgText: "CR",
    shortText:
      "Analyzing user behavior, optimizing landing pages, and implementing A/B testing to increase... ",
    viewDetails: "/service-details",
  },
  {
    iconName: "pe-7s-display1",
    title: "E-commerce Strategy",
    bgText: "ES",
    shortText:
      "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
    viewDetails: "/service-details",
  },
  {
    iconName: "pe-7s-rocket",
    title: "Brand Strategy",
    bgText: "BS",
    shortText:
      "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
    viewDetails: "/service-details",
  },
  {
    iconName: "pe-7s-search",
    title: "Search Engine Optimization",
    bgText: "SEO",
    shortText:
      "Implementing strategic SEO techniques to improve organic search rankings, increase website... ",
    viewDetails: "/service-details",
  },
  {
    iconName: "pe-7s-box2",
    title: "Product Marketing & Strategy",
    bgText: "PM",
    shortText:
      "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
    viewDetails: "/service-details",
  },
  {
    iconName: "pe-7s-light",
    title: "Social Media Marketing",
    bgText: "SM",
    shortText:
      "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
    viewDetails: "/service-details",
  },
  ,
  {
    iconName: "pe-7s-monitor",
    title: "Web & App development",
    bgText: "WAD",
    shortText:
      "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
    viewDetails: "/service-details",
  },
];

const FeaturedServices = () => {
  return (
    <>
      <section className="featured-services-area ptb-100">
        <div className="container">
          <div className="row" style={{paddingRight:30, paddingLeft:30}}>
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
                      <div className="featured-services-box">
                        <div className="icon">
                          <i className={value.iconName}></i>
                        </div>
                        
                        <h3>
                          <Link href={value.viewDetails}>{value.title}</Link>
                        </h3>

                        <p>{value.shortText}</p>

                        <Link
                          href={value.viewDetails}
                          className="read-more-btn"
                        >
                          Read More
                        </Link>

                        <div className="back-text">
                          {value.bgText}
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedServices;
