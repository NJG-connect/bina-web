import React from "react";

import "./skills.scss";
import infoJson from "../../data/data.json";
import { ImgTemplate, Skills as Skill } from "../atoms";

export default function Skills() {
  return (
    <ImgTemplate
      img={infoJson.knowhow.skills.img}
      htmlId="skills"
      size="1650px auto"
    >
      <div className="content">
        {infoJson.knowhow.skills.skill.map((elm, index) => (
          <Skill
            title={elm.title}
            img={elm.icon}
            htmlIdImg={`skill-img${index}`}
            htmlIdText={`skill-text${index}`}
            key={`skills-${elm}-${index}`}
          />
        ))}
      </div>
    </ImgTemplate>
  );
}
