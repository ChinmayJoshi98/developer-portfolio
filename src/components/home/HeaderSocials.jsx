//src/components/home/HeaderSocials.jsx
import React from "react";
import "./home.css";

const HeaderSocials = () => {
  const iconSizeClass = "fa-2x"; // enlarges icons
  return (
    <div className="home__socials">
      <a
        href="https://www.linkedin.com/in/chinmay-joshi-7b6a911b4"
        className="home__social-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className={`fab fa-linkedin ${iconSizeClass}`}></i>
      </a>

      <a
        href="https://github.com/ChinmayJoshi98"
        className="home__social-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className={`fab fa-github ${iconSizeClass}`}></i>
      </a>

      <a
        href="mailto:joshichinmay94@gmail.com"
        className="home__social-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className={`fas fa-envelope ${iconSizeClass}`}></i>
      </a>

      <a
        href="https://www.instagram.com/_dopaminous_/"
        className="home__social-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className={`fab fa-instagram ${iconSizeClass}`}></i>
      </a>

      <a
        href="https://www.youtube.com/@Dopaminous"
        className="home__social-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className={`fab fa-youtube ${iconSizeClass}`}></i>
      </a>

      <div className="custom-tooltip">
        <a
          href="https://www.chess.com/member/dopaminous"
          className="home__social-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={`fas fa-chess ${iconSizeClass}`}></i>
        </a>
        <span className="custom-tooltip-text">
          Play a game of chess with me?
        </span>
      </div>
    </div>
  );
};

export default HeaderSocials;