import Link from "next/link";
import React, { useState } from "react";
import Popup from "reactjs-popup";
import ContactForm from "../Contact/ContactForm";


const FooterDark = () => {
  const [showModal, setShowModal] = useState(false);
  const currentYear = new Date().getFullYear();

  const handleHomeClick = () => {
    console.log("Home clicked");
  };

  const handleAboutClick = () => {
    document
    .getElementById("aboutus")
    .scrollIntoView({ behavior: "smooth" });
  };

  const handleServicesClick = () => {
   
      document
        .getElementById("services")
        .scrollIntoView({ behavior: "smooth" });
  
  };

  const handleContactClick = () => {
    setShowModal(true);
  };

  const footerStyle = {
    backgroundColor: "#333",
    color: "#fff",
    padding: "20px 0",
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const logoStyle = {
    width: "140px",
  };

  const linksStyle = {
    flexGrow: 1, // Adjust flex-grow to center the links
    textAlign: "center",
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    margin: "0 20px",
    cursor: "pointer", // Add cursor pointer to indicate links are clickable
  };

 

  const copyrightStyle = {
    marginLeft: "auto",
  };

  return (
    <>
      <footer style={footerStyle} className="footer-dark">
        <div style={containerStyle} className="container">
          <div style={logoStyle} className="footer-content">
            <img src="/White_Scroll.gif" width="140" alt="Logo" onClick={handleHomeClick} />
          </div>
          <div style={linksStyle} className="footer-content">
            <p>
              <span style={linkStyle} onClick={handleHomeClick}>
              <Link style={{color:"white"}}
                    href="/"
                    // className={`nav-link ${currentPath == "/" && "active"}`}
                  >
                    Home
                    {/* <i className="fa-solid fa-angle-down"></i> */}
                  </Link>
              </span>{" "}
             
              |{" "}
              <span style={linkStyle} onClick={handleServicesClick}>
                Services
              </span>{" "}
              |{" "}
              <span style={linkStyle} onClick={handleAboutClick}>
                Who we are
              </span>{" "}
              |{" "}
              <span  style={linkStyle}><Link href="/blog/" style={{color:'white'}}> Blog</Link></span>
            </p>
          </div>
      
          <div style={copyrightStyle} className="footer-content">
            <p>© {currentYear} FirstScroll.</p>
          </div>
          <Popup
            open={showModal}
            onClose={() => {
              setShowModal(false);
            }}
            contentStyle={{
              borderRadius: "10px",
              minHeight: "55%",
              minWidth: "90%",
              overflow:"scroll",
              maxHeight:"95%"
            }}
            position="right center"
          >
            <div
              style={{
                paddingTop: "20px",
                paddingBottom: "20px",
                borderRadius: 10,
              }}
            >
              <div 
              onClick={()=>{
                setShowModal(false);
              }}
              style={{
                position:"absolute",
                right:"10px",
                top:"10px",
                fontSize:"20px",
                cursor:"pointer"
              }}>
               &#10006;
              </div>
              
              <div style={{
            
              }}><ContactForm/></div>
            </div>
          </Popup>
        </div>
        
      </footer>
    </>
  );
};

export default FooterDark;
