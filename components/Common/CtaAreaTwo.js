import React from "react";
import Link from "next/link";

const CtaAreaTwo = () => {
  
  return (
    <>
      <div className="cta-area-two ptb-100" style={{backgroundColor:"#1F4462"}}>
        <div className="container">
          <div className="cta-content">
            <span
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="100"
              // style={containerStyles}

            >
              <h6 style={{textTransform:'none'}}>Contact Us</h6>
            </span>
            <h4 style={{color:'white'}}
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              Let’s get started and together we can grow your business online
            </h4>
          </div>

          <div
            className="cta-btn-box"
            data-aos="fade-in"
            data-aos-duration="1200"
            data-aos-delay="300"
          >
             <a style={{ textTransform: 'lowercase' }} href="mailto:hello@firstscroll.com" className="green-btn"> <i class="fa-solid fa-envelope-circle-check" style={{marginRight:15}}></i>hello@firstscroll.com</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CtaAreaTwo;
