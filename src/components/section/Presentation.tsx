import React from "react";

import "./presentation.scss";
import infoJson from "../../data/data.json";

import { Title, Img } from "../atoms";
import { ImageType } from "../../assets/images";

const Presentation: React.FC = () => {
  return (
    <section id="presentation">
      <Title value={infoJson.presentation.title} htmlId="presentation-title" />

      <div className="content">
        <div className="img-container">
          <Img img={infoJson.presentation.img as ImageType} className="img" htmlId="presentation-img" />
        </div>
        <div className="text-container">
          <p id="presentation-p1">{infoJson.presentation.paragraph1}</p>
          <p id="presentation-p2">{infoJson.presentation.paragraph2}</p>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
