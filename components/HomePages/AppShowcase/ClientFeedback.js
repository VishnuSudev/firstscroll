import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

const clientFeedbackData = [
  {
    image: "/images/testimonials/04.jpg",
    name: "Daniel",
    designation: "Yoga Cult",
    feedbackText:
      "During our collaboration with First Scroll, we were introduced to innovative and promising marketing strategies for our company. As a result, we now leverage statistics and precise data to navigate the digital space effectively.",
   
  },
  {
    image: "/images/testimonials/01.jpg",
    name: "Ben",
    designation: "Massaggi",
    feedbackText:
      "First Scroll for brand strategy consulting has been a transformative experience for our company. Their expertise has provided us with fresh perspectives on building and refining our brand identity."  ,
   
  },
  {
    image: "/images/testimonials/03.jpg",
    name: "Shankar",
    designation: "Cam Craft",
    feedbackText:
      "By leveraging cutting-edge digital strategies, we have tapped into a plethora of potential leads and sales. Armed with data-driven insights and statistics, we now have the tools to maximize our online presence and convert prospects into satisfied customers.",
    
  },
  {
    image: "/images/testimonials/02.jpg",
    name: "Arifa",
    designation: "CHIC by Sisters",
    feedbackText:
      "First Scroll has revolutionized our e-commerce sales approach. Embracing data-driven strategies and analytics, we now possess valuable insights into consumer behavior and preferences. As a result, we've harnessed the power of the digital landscape",
   

    
  },
];

const ClientFeedback = () => {
  return (
    <>
      <div style={{paddingBottom:50, paddingTop:50}}>
        <div className="container">
          <div className="">
            {/* <span className="app-sub-title">CLIENT REVIEWS</span> */}
            {/* <blockquote class="wp-block-quote"><h1>Beloved by so many <br />people worldwide</h1></blockquote> */}
            <div class="quotes-content"><p>Beloved by so many people worldwide</p></div>
          </div>

          <Swiper
            pagination={{
              clickable: true,
            }}
            spaceBetween={30}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
            modules={[Autoplay, Pagination]}
            className="app-screenshots-slides"
          >
            {clientFeedbackData &&
              clientFeedbackData.map((value, i) => (
                <SwiperSlide key={i}>
                  <div className="app-feedback-box" style={{backgroundColor:'white'}}>
                    <div className="client-info">
                      <div className="d-flex align-items-center">
                        <img src={value.image} alt="user" />

                        <div className="title">
                          <h3>{value.name}</h3>
                          <span>{value.designation}</span>
                        </div>
                      </div>
                    </div>
                    <p>
                      <q>{value.feedbackText}</q>
                    </p>
                    <div className="rating d-flex align-items-center justify-content-between">
                      {/* <h5>{value.category}</h5>
                      <div>
                        {value.rating.map((value, i) => (
                          <i className={value.iconName} key={i}></i>
                        ))}
                      </div> */}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ClientFeedback;
