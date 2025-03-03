//src/components/services/Services.jsx
import React from "react";
import "./services.css";
import Image1 from "../../assets/service-1.svg";
import Image2 from "../../assets/service-2.svg";
import Image3 from "../../assets/service-3.svg";

const data = [
  {
    id: 1,
    image: Image1,
    title: "Full Stack Development",
    description:
      "Designing and developing robust web applications using modern technologies like React.js and Node.js to ensure performance and scalability.",
  },
  {
    id: 2,
    image: Image2,
    title: "API Integration & Automation",
    description:
      "Creating secure and efficient API solutions, including MuleSoft integrations, to streamline business processes and improve system interoperability.",
  },
  {
    id: 3,
    image: Image3,
    title: "Creative Design & Thumbnails",
    description:
      "Crafting engaging YouTube thumbnails and visual designs that capture attention and elevate brand presence.",
  },
];

const Services = () => {
  return (
    <section className="services container section" id="services">
      <h2 className="section__title">Services</h2>

      <div className="services__container grid">
        {data.map(({ id, image, title, description }) => {
          return (
            <div className="services__card" key={id}>
              <img src={image} alt="" className="services__img" />

              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;