import React from "react";
import Link from "next/link";

const FooterDark = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer-dark">
        <div className="copyright-area" style={{marginTop:0}}>
          <div className="container">
            <div className="col-lg-3 col-md-3 col-sm-12">
            <div className="logo">
                  <Link href="/">
                    <img src="/Scroll_White.png" width="140" alt="Logo" />
                  </Link>
                </div>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-12"  style={{position: 'absolute', right: 0}}>
            
            <p>
              Home | About | Services | Contact
            </p>
                  
            </div>
            
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterDark;