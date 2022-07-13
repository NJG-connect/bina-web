import React from "react";

import "./knowHow.scss";
import infoJson from "../../data/data.json";

import { Title, Img, Skills, ImgTemplate } from "../atoms";

const KnowHow: React.FC = () => {
  return (
    <section id="know-how">
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
            <p id="presentation-p1">
              {infoJson.knowhow.presentation.paragraph1}
            </p>
            <p id="presentation-p2">
              {infoJson.knowhow.presentation.paragraph2}
            </p>
          </div>
        </div>
      </div>
      <ImgTemplate img={infoJson.knowhow.skills.img} htmlId="skills">
        <div className="content">
          {infoJson.knowhow.skills.skill.map((elm, index) => (
            <Skills
              title={elm.title}
              img={elm.icon}
              htmlIdImg={`skill-img${index}`}
              htmlIdText={`skill-text${index}`}
            />
          ))}
        </div>
      </ImgTemplate>
    </section>
  );
};

export default KnowHow;
