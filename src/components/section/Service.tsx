import react from "react";

import "./service.scss";
import infoJson from "../../data/dataProject.json";
import { services } from "../../types/Data";
import { Img, ProgressBar, IconButton } from "../atoms";
import { ProjectButton } from "../molecules";

interface Props {
  back: () => void;
  onClick: (service: services) => void;
}

export const Service: React.FC<Props> = ({ back, onClick }) => {
  return (
    <section id="service">
      <div className="left">
        <div className="top">
          <div className="arrow">
            <IconButton img="arrow.svg" onClick={back} />
          </div>
          <div className="bina-logo"></div>
        </div>
        <h3>Dans quel domaine d'activité êtes-vous ?</h3>
        <div className="card-button-container">
          <ProjectButton
            onClick={() => onClick("Hôtellerie / Restauration")}
            img="key.svg"
            text="Hotellerie / restauration"
          />
          <ProjectButton
            onClick={() => onClick("Retail")}
            img="key.svg"
            text="Retail"
          />
          <ProjectButton
            onClick={() => onClick("Autre Projet")}
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
