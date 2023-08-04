import React, { useState } from "react";
import Link from "next/link";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const servicesData = [
  {
    iconName: "pe-7s-rocket bg-13c4a1",
    title: "Digital Advertising Campaigns",
    shortText:
      "Developing and managing data-driven digital advertising campaigns across various platforms, such as Google Ads, Facebook, and other display networks, to drive targeted traffic and conversions.",
    viewDetails: "/service-details",
    aosDelay: "100",
  },
  {
    iconName: "pe-7s-filter bg-6610f2",
    title: "Conversion Rate Optimization",
    shortText:
      "Analyzing user behavior, optimizing landing pages, and implementing A/B testing to increase the percentage of website visitors who take desired actions, resulting in improved ROI",
    viewDetails: "/service-details",
    aosDelay: "200",
  },
  {
    iconName: "pe-7s-light bg-ffb700",
    title: "E-commerce Strategy",
    shortText:
      "Implementing strategic SEO techniques to improve organic search rankings, increase website visibility, and drive qualified traffic, ultimately boosting ROI over time",
    viewDetails: "/service-details",
    aosDelay: "300",
  },
  {
    iconName: "pe-7s-target bg-fc3549",
    title: "Brand Strateg",
    shortText:
      "Utilizing advanced analytics tools to track and measure campaign performance, user engagement, and conversions, providing clients with actionable insights to optimize ROI-driven strategies.",
    viewDetails: "/service-details",
    aosDelay: "400",
  },
  {
    iconName: "pe-7s-helm bg-00d280",
    title: "Search Engine Optimization ",
    shortText:
      "Constantly monitoring campaign performance, adjusting strategies, and optimizing ad placements, keywords, and targeting to achieve the best possible ROI for clients.",
    viewDetails: "/service-details",
    aosDelay: "500",
  },
  {
    iconName: "pe-7s-graph3 bg-ff612f",
    title: "Product Marketing & Strategy",
    shortText:
      "User-centric and visually stunning apps, optimized for seamless user experiences. Leveraging data-driven insights, we create apps that engage users, drive conversions, and boost your brand's ROI",
    viewDetails: "/service-details",
    aosDelay: "600",
  },
  {
    iconName: "pe-7s-users bg-7C73C0",
    title: "Social Media Marketing",
    shortText:
      "User-centric and visually stunning apps, optimized for seamless user experiences. Leveraging data-driven insights, we create apps that engage users, drive conversions, and boost your brand's ROI",
    viewDetails: "/service-details",
    aosDelay: "600",
  },
  {
    iconName: "pe-7s-science bg-B5C99A",
    title: "Web & App development",
    shortText:
      "User-centric and visually stunning apps, optimized for seamless user experiences. Leveraging data-driven insights, we create apps that engage users, drive conversions, and boost your brand's ROI",
    viewDetails: "/service-details",
    aosDelay: "600",
  },
];

const Services = () => {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState("");

  return (
    <>
      <div  className="pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Services Offered</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </div>

          <div className="row justify-content-center">
            {servicesData &&
              servicesData.map((value, i) => (
                <div
                  className="col-lg-3 col-sm-6"
                  key={i}
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay={value.aosDelay}
                >
                  <div 
                  className="service-card-one bg-fcfbfb text-center">
                    <i className={value.iconName}></i>
                    <h3 style={{
                      fontSize:"18px",
                    }}>
                      <Link href="#">{value.title}</Link>
                    </h3>
                    <p
                      style={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {value.shortText}
                    </p>
                    <button
                      onClick={() => {
                        setShowModal(true);
                        setData(value);
                      }}
                      className="btn"
                    >
                      Know More
                    </button>
                  </div>
                </div>
              ))}
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
              padding:"20px"
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
              <div style={{
                paddingTop:"15px"
              }}>{data.shortText}</div>
            </div>
          </Popup>
        </div>
      </div>
    </>
  );
};

export default Services;
