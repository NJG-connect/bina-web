import React from "react";

import infoJson from "../../data/data.json";
import "./skills.scss";
import { Title, Img } from "../atoms";
import { Skill } from "../molecules";

const Skills: React.FC = () => {
  return (
    <section id="home-skills">
      <Skill
        icon="key.svg"
        text="Définir les objectifs du projet"
        index="1"
        htmlId="home-skills-skill1"
      />
    </section>
  );
};

export default Skills;
