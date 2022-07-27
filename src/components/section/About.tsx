import React from "react";

import infoJson from "../../data/data.json";
import "./about.scss";
import { AboutImg } from "../molecules";
import { Title } from "../atoms";

const About: React.FC = () => {
  return (
    <section id="about">
      <Title value="On fait les présentation" />

      <div className="about-main-container">
        <div className="left">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit
            amet convallis dolor, vitae pharetra magna. Vivamus ac scelerisque
            risus. In hac habitasse platea dictumst. Curabitur malesuada id odio
            et rhoncus. Curabitur non ligula velit. Curabitur tristique tempor
            accumsan.
          </p>
        </div>
        <div className="right">
          <AboutImg
            name="Fayçal Benchoira"
            img="choose.png"
            htmlId="about-img1"
          />
          <AboutImg
            name="Fayçal Benchoira"
            img="choose.png"
            htmlId="about-img2"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
