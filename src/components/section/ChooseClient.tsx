import React from "react";

import "./chooseClient.scss";
import infoJson from "../../data/data.json";
import { Img, CardButton, ProgressBar } from "../atoms/";

const ChooseClient: React.FC = () => {
  return (
    <section id="choose">
      <div className="left-container">
        <div className="img"></div>
        <h3>Votre Projet concerne</h3>
        <div className="button-container">
          <CardButton
            onClick={() => console.log("Pro")}
            className="card-button"
          >
            <Img img="key.svg" className="button-img" />
            <p>Professionnel</p>
          </CardButton>
          <CardButton
            onClick={() => console.log("Par")}
            className="card-button"
          >
            <Img img="key.svg" className="button-img" />
            <p>Particuliers</p>
          </CardButton>
        </div>
        <ProgressBar step={1} />
      </div>
      <Img img="choose.png" className="right-img" />
    </section>
  );
};

export default ChooseClient;
