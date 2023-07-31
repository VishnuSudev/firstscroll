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
    iconName: "pe-7s-diamond bg-6610f2",
    title: "Conversion Rate Optimization",
    shortText:
      "Analyzing user behavior, optimizing landing pages, and implementing A/B testing to increase the percentage of website visitors who take desired actions, resulting in improved ROI",
    viewDetails: "/service-details",
    aosDelay: "200",
  },
  {
    iconName: "pe-7s-light bg-ffb700",
    title: "Search Engine Optimization",
    shortText:
      "Implementing strategic SEO techniques to improve organic search rankings, increase website visibility, and drive qualified traffic, ultimately boosting ROI over time",
      viewDetails: "/service-details",
    aosDelay: "300",
  },
  {
    iconName: "pe-7s-target bg-fc3549",
    title: "Data Analytics and Report",
    shortText:
      "Utilizing advanced analytics tools to track and measure campaign performance, user engagement, and conversions, providing clients with actionable insights to optimize ROI-driven strategies.",
    viewDetails: "/service-details",
    aosDelay: "400",
  },
  {
    iconName: "pe-7s-mail-open-file bg-00d280",
    title: "Performance Monitoring ",
    shortText:
      "Constantly monitoring campaign performance, adjusting strategies, and optimizing ad placements, keywords, and targeting to achieve the best possible ROI for clients.",
    viewDetails: "/service-details",
    aosDelay: "500",
  },
  {
    iconName: "pe-7s-users bg-ff612f",
    title: "Marketing CRM development",
    shortText:
      "User-centric and visually stunning apps, optimized for seamless user experiences. Leveraging data-driven insights, we create apps that engage users, drive conversions, and boost your brand's ROI",
    viewDetails: "/service-details",
    aosDelay: "600",
  },
  {
    iconName: "pe-7s-users bg-ff612f",
    title: "Omni-channel retail",
    shortText:
      "Omnichannel retail strategies that empower your brand to thrive in today's competitive market. By synchronizing messaging and promotions across platforms like social media, email, website, and mobile apps, we ensure a consistent and captivating customer experience.",
    viewDetails: "/service-details",
    aosDelay: "600",
  },
];

const Services = () => {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState("");

  return (
    <>
      <div id="services" className="pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </div>

          <div className="row justify-content-center">
            {servicesData &&
              servicesData.slice(0, 6).map((value, i) => (
                <div
                  className="col-lg-4 col-sm-6"
                  key={i}
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay={value.aosDelay}
                >
                  <div className="service-card-one bg-fcfbfb text-center">
                    <i className={value.iconName}></i>
                    <h3>
                      <Link href={value.viewDetails}>{value.title}</Link>
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
                        setData(value.shortText)
                      }}
                      className="btn"
                    >
                      Know More
                    </button>
                  </div>
                </div>
              ))}
          </div>
          <Popup open={showModal} 
          onClose={()=>{
            setShowModal(false);
          }}
          position="right center">
            <div>{data}</div>
          </Popup>
        </div>
      </div>
    </>
  );
};

export default Services;