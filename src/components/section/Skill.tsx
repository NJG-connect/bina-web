import React from "react";

import "./skill.scss";
import infoJson from "../../data/data.json";

import { Skills, ImgTemplate } from "../atoms";

const Skill: React.FC = () => {
  return (
    <ImgTemplate img={infoJson.skills.img} htmlId="skills">
      <div className="content">
        {infoJson.skills.skill.map((elm, index) => (
          <Skills
            title={elm.title}
            img={elm.icon}
            htmlIdImg={`skill-img${index}`}
            htmlIdText={`skill-text${index}`}
          />
        ))}
      </div>
    </ImgTemplate>
  );
};

export default Skill;
