import React from "react";

import "./clientInfo.scss";
import infoJson from "../../data/dataProject.json";
import { Img, ProgressBar, IconButton } from "../atoms/";

interface Props {
  onSubmit: (info: clientInfo) => void;
  back: () => void;
  clientType: "personal" | "professional";
}

interface clientInfo {
  name: string;
  mail: string;
  phone: string;
  postal: number;
  corporation?: string;
}

const ClientInfo: React.FC<Props> = ({ onSubmit, back, clientType }) => {
  return (
    <section id="clientInfo">
      <Img img="choose.png" className="left-img" />
      <div className="right-container">
        <div className="top">
          <IconButton
            img="close.png"
            onClick={back}
            className="icon-button-container back-button"
          />
          <div className="logo"></div>
        </div>
        <h3>Parlez nous de vous:</h3>
        <div className="bottom">
          <IconButton img="close.png" onClick={() => {}} />
          <ProgressBar step={2} />
        </div>
      </div>
    </section>
  );
};

export default ClientInfo;
