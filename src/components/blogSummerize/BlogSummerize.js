import React from "react";
import "./blogsummerize.css";
import portrait from "./../assets/project-blog.jpg";
import plus from "./../assets/plus.png";
const customCards = [
  {
    category: "GRAPHIC",
    image: portrait,
    date: "August 25, 2023",
    title: "Popular Consultants are big Meetup 2023",
    author: "Alex Collins",
  },
  {
    category: "DEVELOPMENT",
    image: portrait,
    date: "August 21, 2023",
    title: "How to Increase Business Products Sales",
    author: "Julia Moris",
  },
  {
    category: "DESIGN",
    image: portrait,
    date: "August 20, 2023",
    title: "Top 10 Most Popular Google Chrome app",
    author: "Amantha",
  },
];

const BlogSummerize = () => {
  return (
    <div className="container100">
      <div className="headlineFeature">
        <div className="textPresentation">
          <h1>
            We’re here to share story from <span>Latest News </span>
          </h1>
        </div>
        <div className="btnFeauture">
          <button className="btnHero btnservice">
            View all blogs
            <div className="iconHero">
              <img src={plus} alt="" width="100%" heigh="auto" />
            </div>
          </button>
        </div>
      </div>
      <div className="customa-card-wrapper">
        {customCards.map((card, index) => (
          <div className="custom-card-box" key={index}>
            <div className="custom-card-image">
              <img src={card.image} alt={card.category} />
              <span className="custom-category-label">{card.category}</span>
            </div>
            <div className="custom-card-body">
              <p className="custom-date-text">📅 {card.date}</p>
              <h3 className="custom-title-text">{card.title}</h3>
              <div className="custom-author-block">
                <span className="custom-author-name">👤 {card.author}</span>
                <a href="#" className="custom-learn-more">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSummerize;
