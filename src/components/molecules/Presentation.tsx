import React from "react";

import "./presentation.scss";
import infoJson from "../../data/data.json";
import { Title, Img } from "../atoms/";

export default function Presentation() {
  return (
    <div className="presentation">
      <Title
        value={infoJson.knowhow.presentation.title}
        htmlId="presentation-title"
      />

      <div className="content">
        <div className="img-container">
          <Img
            img={infoJson.knowhow.presentation.img}
            className="img"
            htmlId="presentation-img"
          />
        </div>
        <div className="text-container">
          <p id="presentation-p1">{infoJson.knowhow.presentation.paragraph1}</p>
          <p id="presentation-p2">{infoJson.knowhow.presentation.paragraph2}</p>
        </div>
      </div>
    </div>
  );
}
