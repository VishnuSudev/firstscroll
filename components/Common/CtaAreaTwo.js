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
              // style={containerStyles}

            >
              Contact Us
            </span>
            <h5 style={{color:'white',fontSize:30}}
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              Have a question or an idea?  Please let me know
            </h5>
          </div>

          <div
            className="cta-btn-box"
            data-aos="fade-in"
            data-aos-duration="1200"
            data-aos-delay="300"
          >
             <a style={{ textTransform: 'lowercase' }} href="mailto:hello@firstscroll.com" className="custom-btn"> <i class="fa-solid fa-envelope-circle-check" style={{marginRight:15}}></i>hello@firstscroll.com</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CtaAreaTwo;
