import React from "react";
import "./achievement.css";
import ceo from "./../assets/ceo.jpg";
import quote from "./../assets/ab-shape.png"
const Achievement = () => {
  return (
    <div className="testimonial-section">
      <div className="sectionContent">
        <div className="testimonial-content">
          <h2>
          What Our CEO Says About{" "}
            <span className="highlight">SW DEV</span>
          </h2>
          <p className="testimonial-quote">
            <i>
            "We help our clients transform their business operations by creating scalable mobile and web applications, enhancing UX/UI design, and building strong, recognizable brands in the digital world."
            </i>
          </p>
          <p className="testimonial-description">
          We focus on delivering high-performance web and mobile applications, intuitive UX/UI design, and strategic branding to ensure seamless user experiences and long-term business success.
          </p>
          <div className="ceo-info">
            <span className="ceo-name">Willy JH</span>
            <span className="ceo-title">CEO & Founder</span>
          </div>
        </div>
        <div className="testimonial-image">
          <img src={ceo} alt="CEO" width='100%' heigh='auto' />
          <div className="quote-icon">
            <img src={quote} alt=""/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
