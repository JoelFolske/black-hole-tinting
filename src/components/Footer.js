import React from "react";
import "./FooterStyles.css";
import {
  FaFacebook,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaSearchLocation,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaSearchLocation
              size={20}
              style={{ color: "#ffffff", marginRight: "2rem" }}
            />

            <div>
              <p>Birmingham, Al</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#ffffff", marginRight: "2rem" }}
              />
              205-600-1838
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#ffffff", marginRight: "2rem" }}
              />
              blackholetinting@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About Our Company</h4>
          <p>
            We're proud of our tint shop and strive to keep it a clean, well lit
            environment in which to install in. Unlike most high output tint
            shops, you can feel confident leaving your car with us as you go
            about your day worry free.
          </p>
          <div className="social">
              <FaFacebook
                size={30}
                style={{ color: "#ffffff", marginRight: "1rem" }}
              />

            <FaTwitter
              size={30}
              style={{ color: "#ffffff", marginRight: "1rem" }}
            />
          
            <FaLinkedin
              size={30}
              style={{ color: "#ffffff", marginRight: "1rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;


