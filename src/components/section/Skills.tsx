import React from "react";

import infoJson from "../../data/data.json";
import "./skills.scss";
import { Title, Img } from "../atoms";
import { Skill } from "../molecules";

const Skills: React.FC = () => {
  return (
    <section id="home-skills">
      <Title value={infoJson.skills.title} htmlId="home-skills-title" />
      <div className="top">
        <Img
          img={infoJson.skills.gif}
          htmlId="home-skills-gif"
          className="left"
          size="cover"
        />
        <div className="right-container">
          {infoJson.skills.skill.map((elm, index) => (
            <Skill
              icon={elm.icon}
              text={elm.title}
              index={String(index + 1)}
              htmlId={`${index}-home-skills-skill`}
              key={`home-skills-skill-component-${index}`}
            />
          ))}
        </div>
      </div>
      <div className="bottom">
        <h5 id="home-skills-text1" className="text">
          {infoJson.skills.text1}
        </h5>
        <h5 id="home-skills-text2" className="text">
          {infoJson.skills.text2}
        </h5>
      </div>
    </section>
  );
};

export default Skills;
