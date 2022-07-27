import React from "react";

import infoJson from "../../data/data.json";
import "./about.scss";
import { AboutImg } from "../molecules";
import { Title } from "../atoms";

const About: React.FC = () => {
  return (
    <section id="about">
      <Title value={infoJson.about.title} htmlId="about-title" />

      <div className="about-main-container">
        <div className="left">
          <p id="about-text">{infoJson.about.text}</p>
        </div>
        <div className="right">
          <AboutImg
            name={infoJson.about.card1.name}
            img={infoJson.about.card1.img}
            htmlId="about-card1"
          />
          <AboutImg
            name={infoJson.about.card2.name}
            img={infoJson.about.card2.img}
            htmlId="about-card2"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
