import React from "react";
import "./home.css";
import hero1 from "./../../assets/hero-image.png";
import call from "./../../assets/call.png";
import plus from "./../../assets/plus.png";
import Featur from "../../featur/Featur";
import Achievement from "../../acievement/Achievement";
import ProjectSlide from "../../ProjectSlide/ProjectSlide";
import ConsultingSection from "../../consulting/ConsultingSection";
import BlogSummerize from "../../blogSummerize/BlogSummerize";
import Footer from "../../footer/Footer";

const Home = () => {
  return (
    <div>
      <div className="herosection">
        <div className="heroContent">
          <div className="item item1">
            <div className="workp">
              <span>
                <hr className="lineWork" />
              </span>
              <h1>Work with SW DEV</h1>
            </div>
            <h2>
              Innovate Solution For Business <span>Success</span>
            </h2>
            <p>
            We create stunning websites, redesign platforms, and craft unique branding to elevate your business.
            </p>
            <hr className="Separation" />
            <div className="listButoon">
              <div className="herobtnContaine">
                <button className="btnHero">
                  Work together
                  <div className='iconHero'>
                    <img src={plus} alt="" width='100%' heigh='auto' />
                  </div>
                </button>
              </div>
              <div className="callIcon">
                <div className="icon">
                  <img src={call} alt="" width='100%' heigh='auto'/>
                </div>
                <div className="call">
                  <span>Call Everyday</span>
                  <span>+261 34 50 557 68</span>
                </div>
              </div>
            </div>
          </div>
          <div className="item item2">
            <img src={hero1} alt="" width="100%" heigh="auto" />
          </div>
        </div>
      </div>
      <Featur/>
      <Achievement/>
      <ProjectSlide/>
      <ConsultingSection/>
      <BlogSummerize/>
      <Footer/>
    </div>
  );
};

export default Home;
