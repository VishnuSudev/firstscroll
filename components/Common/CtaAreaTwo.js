import React from "react";
import Link from "next/link";

const CtaAreaTwo = () => {
  return (
    <>
      <div className="cta-area-two ptb-100">
        <div className="container">
          <div className="cta-content">
            <span
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              So What is Next?
            </span>
            <h5 style={{color:'white',fontSize:30}}
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              Excited to explore what the future holds? Connect with us to collaborate on your next project
            </h5>
          </div>

          <div
            className="cta-btn-box"
            data-aos="fade-in"
            data-aos-duration="1200"
            data-aos-delay="300"
          >
             <Link
                 onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" });
                }}
                href="/contact/" className="custom-btn">
                  Contact Us
                </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CtaAreaTwo;
