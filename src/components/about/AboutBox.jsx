//src/components/about/AboutBox.jsx
import React from "react";

const AboutBox = () => {
  return (
    <div className="about__boxes grid">
      <div className="about__box">
        <i className="about__icon icon-layers"></i>
        <div>
          <h3 className="about__title">5+</h3>
          <span className="about__subtitle">Projects Delivered</span>
        </div>
      </div>

      <div className="about__box">
        <i className="about__icon icon-settings"></i>
        <div>
          <h3 className="about__title">25+</h3>
          <span className="about__subtitle">APIs Developed</span>
        </div>
      </div>

      <div className="about__box">
        <i className="about__icon icon-people"></i>
        <div>
          <h3 className="about__title">3+</h3>
          <span className="about__subtitle">Teams Mentored</span>
        </div>
      </div>

      <div className="about__box">
        <i className="about__icon icon-camera"></i>
        <div>
          <h3 className="about__title">50+</h3>
          <span className="about__subtitle">YouTube Thumbnails</span>
        </div>
      </div>
    </div>
  );
};

export default AboutBox;