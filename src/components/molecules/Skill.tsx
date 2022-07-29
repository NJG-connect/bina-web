import React from "react";

import "./skill.scss";
import { Img } from "../atoms";

interface Props {
  text: string;
  index: string;
  icon: string;
  htmlId: string;
}

const Skill: React.FC<Props> = ({ text, index, icon, htmlId }) => {
  return (
    <div className="skill-container">
      <Img img={icon} className="icon" htmlId={`${htmlId}-icon`} />
      <p id={`${htmlId}-text`} className="text">
        {text}
      </p>
      <h3 className="index">{index}</h3>
    </div>
  );
};

export default Skill;
