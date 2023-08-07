import React from "react";

const funfactsData = [
  {
    number: "60+",
    title: "Successful Projects",
    aosDelay: "100",
  },
  {
    number: "500+",
    title: "Happy Clients",
    aosDelay: "200",
  },
  {
    number: "10+",
    title: "Years in Business",
    aosDelay: "300",
  }
];

const Funfacts = () => {
  return (
    <>
      <div className="bc-funfacts-area bg-image" style={{paddingTop:30}}>
        <div className="container">
          <div className="row justify-content-center">
            {funfactsData &&
              funfactsData.slice(0, 3).map((value, i) => (
                <div 
                  className="col-lg-4 col-sm-12 col-md-4" 
                  key={i}
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay={value.aosDelay}
                >
                  <div className="bc-funfacts-box text-center">
                    <h3>{value.number}</h3>
                    <span className="sub-title">{value.title}</span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Funfacts;
