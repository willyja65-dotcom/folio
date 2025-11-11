import React, { useState } from "react";
import "./projectslide.css";
import mobilDesign from './../assets/d-mobile.jpeg';
import dDesktop from './../assets/d-desktop.jpeg';
import dWeb from './../assets/d-web.png';
import plus from './../assets/plus.png'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const data = [
  {
    id: 1,
    date: "08 September 2024",
    category: "Design UX/UI",
    title: "Spice & Turmeric E-commerce UI/UX",
    description:
      "This UX/UI design is for CURCUS, an e-commerce platform dedicated to turmeric and spices. It blends a clean, modern aesthetic with a user-friendly interface, offering easy navigation, product exploration. ",
    image: dDesktop,
  },
  {
    id: 2,
    date: "10 December 2024",
    category: "WEB Site",
    title: "Stylish Sofas & Home Furniture",
    description:
      "HouseNiture is an eCommerce platform offering stylish sofas and home furniture. It features an elegant design, seamless navigation, and high-quality products to enhance interior comfort and aesthetics. Shop effortlessly with intuitive browsing.",
    image: dWeb,
  },
  {
    id: 3,
    date: "08 January 2025",
    category: "Design UX/UI",
    title: "TANA BUS – Smart Transport App UI/UX",
    description:
      "This UX/UI design concept is for TANA BUS, a transport app that helps users find bus stops, avoid wrong routes, and improve punctuality through account-based personalized experiences and seamless login options. ",
    image: mobilDesign,
  },
];

const ProjectSlide = () => {
  return (
    <div className="w-100">
        <div className="headlineFeature">
          <div className="textPresentation">
            <h1>
              Our last <span>Project</span>
            </h1>
          </div>
          <div className="btnFeauture">
            <button className="btnHero btnservice">
              All Projects
              <div className="iconHero">
                <img src={plus} alt="" width="100%" heigh="auto" />
              </div>
            </button>
          </div>
        </div>
      <div className="w-80">
        
        <div className="carousel-container">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="card">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="card-image"
                  />
                  <div className="card-content">
                    <p className="date">{item.date}</p>
                    <p className="category">{item.category}</p>
                    <h3 className="title">{item.title}</h3>
                    <p className="description">{item.description}</p>
                    <button className="read-more">Read More</button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ProjectSlide;
