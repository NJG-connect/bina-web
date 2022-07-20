import React from "react";

import "./chooseClient.scss";
import infoJson from "../../data/dataProject.json";
import { Img, CardButton, ProgressBar } from "../atoms/";

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
          <CardButton
            onClick={() => onClick("professional")}
            className="card-button"
          >
            <Img
              img={infoJson.screen1.card1.icon}
              className="button-img"
              htmlId="project-screen1-card1-img"
            />
            <p id="project-screen1-card1-title">
              {infoJson.screen1.card1.text}
            </p>
          </CardButton>
          <CardButton
            onClick={() => onClick("personal")}
            className="card-button"
          >
            <Img
              img={infoJson.screen1.card2.icon}
              className="button-img"
              htmlId="project-screen1-card2-img"
            />
            <p id="project-screen1-card2-title">
              {infoJson.screen1.card2.text}
            </p>
          </CardButton>
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
