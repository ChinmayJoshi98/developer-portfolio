//src/components/home/Home.jsx
import React from "react";
import "./home.css";
import Me from "../../assets/meAvatar.png";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home__img" style={{maxWidth:'300px'}} />
        <h1 className="home__name">Chinmay Joshi</h1>
        <span className="home__education">I'm a Full Stack Developer and a Certified Mulesoft Developer, I love cats!</span>

        <HeaderSocials />

        <a href="#contact" className="btn">
          Hire Me
        </a>

        <ScrollDown />
      </div>

      <Shapes />
    </section>
  );
};

export default Home;
