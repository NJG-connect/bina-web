import React from "react";

import infoJson from "../../data/data.json";
import "./about.scss";
import { AboutImg } from "../molecules";

const About: React.FC = () => {
  return (
    <section id="about">
      <AboutImg name="Fayçal Benchoira" img="choose.png" htmlId="about-img1" />
      <AboutImg name="Fayçal Benchoira" img="choose.png" htmlId="about-img1" />
    </section>
  );
};

export default About;
