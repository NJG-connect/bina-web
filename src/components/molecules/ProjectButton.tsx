import React from "react";

import "./projectButton.scss";
import { CardButton, Img } from "../atoms/";

interface Props {
  onClick: (client: "personal" | "professional") => void;
  img: string;
  text: string;
}

const ProjectButton: React.FC<Props> = ({ onClick, img, text }) => {
  return (
    <CardButton
      onClick={() => onClick("professional")}
      className="project-card-button"
    >
      <Img
        img={img}
        className="button-img"
        htmlId="project-screen1-card1-img"
      />
      <p id="project-screen1-card1-title">{text}</p>
    </CardButton>
  );
};

export default ProjectButton;
