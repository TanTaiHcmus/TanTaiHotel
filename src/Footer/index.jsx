import React from "react";
import "./index.scss";
import FacebookIcon from "../Images/facebook.svg";
import InstagramIcon from "../Images/instagram.svg";
import GoogleIcon from "../Images/google.svg";

const Footer = () => {
  return (
    <div className="app-footer">
      <div className="footer-item main-contact">
        <div className="footer-item-title">Main contact</div>
        <div className="footer-item-content vertical">
          <div>Hoa Tien, Hoa Vang, Da Nang, VN</div>
          <div>dttaihcmus@gmail.com</div>
          <div>0782122579</div>
        </div>
      </div>

      <div className="footer-item site-links">
        <div className="footer-item-title">Site links</div>
        <div className="footer-item-content vertical">
          <div>About us</div>
          <div>Our rooms</div>
        </div>
      </div>

      <div className="footer-item social">
        <div className="footer-item-title">Social</div>
        <div className="footer-item-content">
          <img src={FacebookIcon} alt="facebook-icon" className="social-icon" />
          <img
            src={InstagramIcon}
            alt="instagram-icon"
            className="social-icon"
          />
          <img src={GoogleIcon} alt="google-icon" className="social-icon" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
