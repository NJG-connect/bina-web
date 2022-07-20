import React from "react";

import "./clientInfo.scss";
import infoJson from "../../data/dataProject.json";
import { clientInfo } from "../../types/Data";
import { Img, ProgressBar, IconButton } from "../atoms/";
import { ClientForm } from "../molecules/";

interface Props {
  onSubmit: (info: clientInfo) => void;
  back: () => void;
  clientType: "personal" | "professional";
}

const ClientInfo: React.FC<Props> = ({ onSubmit, back, clientType }) => {
  return (
    <section id="clientInfo">
      <Img img="choose.png" className="left-img" />
      <div className="right-container">
        <div className="top">
          <IconButton img="arrow.svg" onClick={back} className="back-button" />
          <div className="logo"></div>
        </div>
        <h3>Parlez nous de vous:</h3>
        <ClientForm client={clientType} />
        <div className="bottom">
          <IconButton
            img="arrow.svg"
            className="submit-button"
            onClick={() => {}}
          />
          <ProgressBar step={2} />
        </div>
      </div>
    </section>
  );
};

export default ClientInfo;
