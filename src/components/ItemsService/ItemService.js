import React from "react";
import './ItemService.css'
const ItemService = ({ id, title, description, icon }) => {
  return (
    <div className="service-card">
      <div className="icon-container">
        <span className="icon"><img src={icon} alt="" width="60px" heigh='auto' /></span>
      </div>
      <h2 className="service-id">{id}</h2>
      <h3 className="service-title">{title}</h3>
      <div className="separator"></div>
      <p className="service-description">{description}</p>
      <button className="read-more">
        Read More <span className="plus">+</span>
      </button>
    </div>
  );
};

export default ItemService;
