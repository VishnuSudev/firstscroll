import React from "react";

const partnersData = [
  {
    image: "https://place-hold.it/194x128",
    link: "#",
    aosDelay: "100",
  },
  {
    image: "https://place-hold.it/194x128",
    link: "#",
    aosDelay: "200",
  },
  {
    image: "https://place-hold.it/194x128",
    link: "#",
    aosDelay: "300",
  },
  {
    image: "https://place-hold.it/194x128",
    link: "#",
    aosDelay: "400",
  },
  {
    image: "https://place-hold.it/194x128",
    link: "#",
    aosDelay: "500",
  },
  {
    image: "https://place-hold.it/194x128",
    link: "#",
    aosDelay: "600",
  },
  {
    image: "https://place-hold.it/194x128",
    link: "#",
    aosDelay: "700",
  },
  {
    image: "https://place-hold.it/194x128",
    link: "#",
    aosDelay: "800",
  },
  {
    image: "https://place-hold.it/194x128",
    link: "#",
    aosDelay: "900",
  },
  {
    image: "https://place-hold.it/194x128",
    link: "#",
    aosDelay: "1000",
  },
  {
    image: "https://place-hold.it/194x128",
    link: "#",
    aosDelay: "1100",
  },
  {
    image: "https://place-hold.it/194x128",
    link: "#",
    aosDelay: "1200",
  },
];

const PartnerTwo = () => {
  return (
    <>
      <div
      id="clients"
      className="partner-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Our Loving Clients</h2>
            <p>
            We excel in impactful campaigns for Health & Beauty, Food & Beverage, and FMCG sectors, E-commerce, and others. From global brand activations to local challenger brands, our focus remains on thoughtful, performance-led social executions.
            </p>
          </div>

          <div className="row align-items-center justify-content-center">
            {partnersData &&
              partnersData.map((value, i) => (
                <div className="col-lg-2 col-6 col-sm-4" key={i}>
                  <div
                    className="single-partner border"
                    data-aos="fade-in"
                    data-aos-duration="1200"
                    data-aos-delay={value.aosDelay}
                  >
                    <div className="d-table">
                      <div className="d-table-cell">
                        <a href={value.link} target="_blank">
                          <img src={value.image} alt="Partner Image" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnerTwo;
