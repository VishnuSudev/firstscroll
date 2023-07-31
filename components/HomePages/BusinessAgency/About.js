import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

const About = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <section className="about-area bg-fcfbfb ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <div 
                className="about-image"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <img
                  src="/images/about-img5.jpg"
                  alt="image"
                  className="rounded-10"
                />

                <div className="video-box">
                  <div
                    className="video-btn"
                    onClick={() => setToggler(!toggler)}
                  >
                    <i className="fa-solid fa-play"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <div 
                className="about-content about-content-two"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                <div className="section-title">
                  <h2>About Us</h2>
                  <p>
                  First Scroll, where marketing meets mischief! We're the oddball performance marketing wizards, concocting ROI-driven spells that mesmerize audiences. From quirky campaigns to data-driven delights, we've got the magic formula for success, we steer your success story, one scroll at a time.
                  </p>
                </div>

                <div className="about-text">
                  <h4>Who We Are</h4>
                  <p>
                  For over 9 years, our digitally obsessed marketing specialists have formed a diverse team, drove high-impact campaigns while delivering exceptional client service. With a passion for all things digital, we embrace innovation to ensure your success in the ever-evolving marketing landscape.
                  </p>
                </div>

                <div className="row">
                  <div className="col-lg-6">
                    <div className="about-text mb-30">
                      <h4>Our Success</h4>
                      <ul>
                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </li>
                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          It is a long established fact that a reader will be
                          distracted by the readable.
                        </li>
                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          Contrary to popular belief, Lorem Ipsum is not simply
                          random text.
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="about-text mb-30">
                      <h4>Grow Business</h4>
                      <ul>
                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </li>
                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          It is a long established fact that a reader will be
                          distracted by the readable.
                        </li>
                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          Contrary to popular belief, Lorem Ipsum is not simply
                          random text.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
