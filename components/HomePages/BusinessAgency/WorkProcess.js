import React from "react";

const workProcessData = [
  {
    title: "Our Work Process",
    shortText:
      "",
    image: "/images/man-with-mobile.png",
    circleImage: "/images/circle.png",

    list: [
      {
        iconName: "pe-7s-display1",
        title: "Define your goals \n and objectives",
        text: "1.",
        aosDelay: "100",
      },
      {
        iconName: "pe-7s-display2",
        title: "Determine \n your channels",
        text: "2.",
        aosDelay: "200",
      },
      {
        iconName: "pe-7s-airplay",
        title: "Create a \n campaign with \n messaging",
        text: "3.",
        aosDelay: "300",
      },
      {
        iconName: "pe-7s-note2",
        title: "Execute your \n campaign",
        text: "4.",
        aosDelay: "400",
      },
      {
        iconName: "pe-7s-light",
        title: "Gather and \n analyze data",
        text: "5.",
        aosDelay: "500",
      },
      {
        iconName: "pe-7s-sun",
        title: "Optimize, rinse \n and repeat",
        text: "6.",
        aosDelay: "600",
      },
    ],
  },
];

const WorkProcess = () => {
  return (
    <>
      {workProcessData &&
        workProcessData.map((value, i) => (
          <section id="process" className="work-process-area ptb-100" key={i}>
            <div className="container">
              <div className="section-title">
                <h2>{value.title}</h2>
                <p>{value.shortText}</p>
              </div>

              <div className="work-process">
                <div
                  data-aos="zoom-in"
                  data-aos-duration="1200"
                  data-aos-delay="600"
                >
                  <img src={value.image} alt="image" />
                </div>

                <div className="work-process-list">
                  {value.list.slice(0, 6).map((value, i) => (
                    <div
                      className="single-work-process"
                      key={i}
                      data-aos="fade-in"
                      data-aos-duration="1200"
                      data-aos-delay={value.aosDelay}
                    >
                      <div className="icon">
                        <i className={value.iconName}></i>
                      </div>
                      <h6 >{value.text}</h6>
                      <span style={{ whiteSpace: 'pre-line' }}>{value.title}</span>
                    </div>
                  ))}
                </div>

                <img
                  src={value.circleImage}
                  className="rotateme circle-image"
                  alt="image"
                />
              </div>
            </div>
          </section>
        ))}
    </>
  );
};

export default WorkProcess;
