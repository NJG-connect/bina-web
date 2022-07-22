import React from "react";

import "./chooseClient.scss";
import infoJson from "../../data/dataProject.json";
import { Img, CardButton, ProgressBar } from "../atoms/";
import { ProjectButton } from "../molecules/";

interface Props {
  onClick: (client: "personal" | "professional") => void;
  home: () => void;
}

const ChooseClient: React.FC<Props> = ({ onClick, home }) => {
  return (
    <section id="choose">
      <div className="left-container">
        <div className="img" onClick={home}></div>
        <h3 id="project-screen1-title">{infoJson.screen1.title}</h3>
        <div className="button-container">
          <ProjectButton
            onClick={(client) => onClick("professional")}
            img={infoJson.screen1.card1.icon}
            text={infoJson.screen1.card1.text}
          />
          <ProjectButton
            onClick={(client) => onClick("personal")}
            img={infoJson.screen1.card2.icon}
            text={infoJson.screen1.card2.text}
          />
        </div>
        <ProgressBar step={1} />
      </div>
      <Img
        img={infoJson.screen1.background}
        className="right-img"
        htmlId="project-screen1-bg"
      />
    </section>
  );
};

export default ChooseClient;
