import React from "react";
import "./consult.css";
const ConsultingSection = () => {
  const services = [
    { id: 1, title: "Idea", subtitle: "Generate",classA:"u1" },
    { id: 2, title: "System", subtitle: "Design" ,classA:"u2"},
    { id: 3, title: "24/7", subtitle: "Support" ,classA:"u3"},
    { id: 4, title: "Sales", subtitle: "Generate",classA:"u4" },
  ];

  return (
    <div className="w-100C">
      <div className="w-80C">
        <section className="tech-consulting">
          <div className="tech-container">
            <div className="tech-grid">
              {services.map((service) => (
                <div key={service.id} className={`tech-card ${service.classA}`} >
                  <div className="tech-icon">{service.id}</div>
                  <h3>
                    <span className="tech-highlight">{service.title}</span>{" "}
                    {service.subtitle}
                  </h3>
                  <p>Appropriately enhance data centered innovation</p>
                </div>
              ))}
            </div>

            <div className="tech-content">
              <h2>
                The <span className="tech-bold">Fastest</span> Way To Achieve
                Technology <span className="tech-highlight">Consulting</span>
              </h2>
              <p>
                For Choose <span className="tech-highlight">SW DEV</span> Before
                know who we are?
              </p>
              <p className="tech-description">
                Monotonectally brand worldwide value before in seamless process
                data...
              </p>
              <button className="tech-btn">
                More About <span className="tech-plus">+</span>
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ConsultingSection;
