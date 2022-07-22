import react from "react";

import "./service.scss";
import infoJson from "../../data/dataProject.json";
import { Img, ProgressBar, IconButton } from "../atoms";
import { ProjectButton } from "../molecules";

export const Service: React.FC = () => {
  return (
    <section id="service">
      <div className="left">
        <div className="top">
          <div className="arrow">
            <IconButton img="arrow.svg" onClick={() => {}} />
          </div>
          <div className="bina-logo"></div>
        </div>
        <h3>Dans quel domaine d'activité êtes-vous ?</h3>
        <div className="card-button-container">
          <ProjectButton
            onClick={() => {}}
            img="key.svg"
            text="Hotellerie / restauration"
          />
          <ProjectButton onClick={() => {}} img="key.svg" text="Retail" />
          <ProjectButton
            onClick={() => {}}
            img="key.svg"
            text="Autre project"
          />
        </div>
        <div className="bottom">
          <ProgressBar step={3} />
        </div>
      </div>
      <Img img="choose.png" className="right" size="cover" />
    </section>
  );
};

export default Service;
