// src/components/portfolio/Portfolio.jsx
import React, { useState } from "react";
import "./portfolio.css";
import Menu from "./Menu";

const Portfolio = () => {
  const [items, setItems] = useState(Menu);

  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === categoryItem;
    });
    setItems(updatedItems);
  };

  return (
    <section className="work container section" id="work">
      <h2 className="section__title">Personal Projects</h2>

      <div className="work__filters">
        <span className="work__item" onClick={() => setItems(Menu)}>
          Everything
        </span>
        <span
          className="work__item"
          onClick={() => filterItem("Programming")}
        >
          Programming
        </span>
        <span className="work__item" onClick={() => filterItem("Design")}>
          Design
        </span>
      </div>

      <div className="work__container grid">
        {items.map((elem) => {
          const { id, image, title, category, link, liveLink } = elem;
          return (
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img src={image} alt={title} className="work__img" />
                <div className="work__mask"></div>
              </div>

              <span className="work__category">{category}</span>
              <h3 className="work__title">{title}</h3>
              {link && (
                <a
                  href={link}
                  className="work__button"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="icon-link work__button-icon"></i>
                </a>
              )}
              {liveLink && (
                <a
                  href={liveLink}
                  className="work__button work__button-live"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="icon-globe work__button-icon"></i>
                </a>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;