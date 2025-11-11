import React from "react";
import "./feature.css";
import plus from "./../assets/plus.png";
import web from './../assets/web.png'
import construct from './../assets/construct.png'
import ux from './../assets/ux.png'
import brand from './../assets/brand.png'

import ItemService from "../ItemsService/ItemService";

const services = [
  {
    id: "01",
    title: "Website Creation",
    description:
      "We build custom, responsive, high-performance websites tailored to your business.",
    icon: web,
  },
  {
    id: "02",
    title: "Website Redesign",
    description:
      "Modernizing websites with better design, speed, functionality, and user experience.",
    icon: construct,
  },
  {
    id: "03",
    title: "UX/UI Design",
    description:
      "Intuitive, engaging, and user-friendly designs that enhance customer experience",
    icon: ux,
  },
  {
    id: "04",
    title: "Branding & Advertising",
    description:
      "Creating logos, visuals, and marketing assets for strong brand identity.",
    icon: brand,
  },
];

const Featur = () => {
  return (
    <div className="feature">
      <div className="headlineFeature">
        <div className="textPresentation">
          <h1>
            We Run All Kinds Of Services From <span>Technologies</span>
          </h1>
        </div>
        <div className="btnFeauture">
          <button className="btnHero btnservice">
            All Services
            <div className="iconHero">
              <img src={plus} alt="" width="100%" heigh="auto" />
            </div>
          </button>
        </div>
      </div>

      <div className="ItemService">
        <div className="services-container">
          {services.map((service) => (
            <ItemService key={service.id} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featur;
