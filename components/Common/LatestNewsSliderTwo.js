import React, { Component } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

const latestNewsData = [
  {
    image: "/images/projects/firstscroll_project_01.jpg",
  },
  {
    image: "/images/projects/firstscroll_project_02.jpg",
  },
  {
    image: "/images/projects/firstscroll_project_03.jpg",
  },
  {
    image: "/images/projects/firstscroll_project_04.jpg",
  },
];

const LatestNewsSliderTwo = () => {
  return (
    <>
      <div
        id="blogs"
        className="blog-area">
        <div className="container">


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
              992: {
                slidesPerView: 3,
              },
            }}
            modules={[Autoplay, Pagination]}
            className="blog-slides"
          >
            {latestNewsData &&
              latestNewsData.slice(0, 5).map((value, i) => (
                <SwiperSlide key={i}>
                  <div className="single-blog-item">
                    <div className="blog-image">
                      <Link href="#">
                        <img src={value.image} alt="image" />
                      </Link>
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

export default LatestNewsSliderTwo;