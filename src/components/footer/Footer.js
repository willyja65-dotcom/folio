import React from "react";
import "./footer.css";
import postPop from "./../assets/exemple.jpg";
const Footer = () => {
  return (
    <div className="containerW100">
      <div className="newsletter-container">
        <div className="newsletter-content">
          <h2>Subscribe to our Newsletter</h2>
          <div className="newsletter-input-container">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="newsletter-input"
            />
            <button className="newsletter-button">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="footer-container">
        <div className="footer-section about-section">
          <h3>About Us</h3>
          <div className="footer-underline"></div>
          <p>
            Business Consulting is optimizing standing manufactured products and
            installation synergy. Professionally predominant why professional
            business.
          </p>
          <div className="footer-social-icons">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-youtube"></i>
          </div>
        </div>

        <div className="footer-section company-section">
          <h3>Company</h3>
          <div className="footer-underline"></div>
          <ul className="linkFooter">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Service</li>
            <li>Our Team</li>
          </ul>
        </div>

        <div className="footer-section services-section">
          <h3>Services</h3>
          <div className="footer-underline"></div>
          <ul className="linkFooter">
            <li>Web site creation</li>
            <li>Web site Redesign</li>
            <li>UX/UI Design</li>
            <li>Branding & Advertising</li>
          </ul>
        </div>

        <div className="footer-section popular-posts-section">
          <h3>Popular Posts</h3>
          <div className="footer-underline"></div>
          <div className="footer-post">
            <img src={postPop} alt="Post 1" />
            <div>
              <p>How To Plugin Install WP server?</p>
              <span>Dec 12, 2023</span>
            </div>
          </div>
          <div className="footer-post">
            <img src={postPop} alt="Post 2" />
            <div>
              <p>Top 10 Most Useful Google Extension</p>
              <span>Dec 15, 2023</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
