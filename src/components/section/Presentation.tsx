import React from "react";

import "./presentation.scss";
import infoJson from "../../data/data.json";

import { Title, Img } from "../atoms";

const Presentation: React.FC = () => {
  return (
    <section id="presentation">
      <Title value="Notre savoir faire" />

      <div className="content">
        <div className="img-container">
          <Img img="header" className="img" />
        </div>
        <div className="text-container">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit
            amet convallis dolor, vitae pharetra magna. Vivamus ac scelerisque
            risus. In hac habitasse platea dictumst. Curabitur malesuada id odio
            et rhoncus. Curabitur non ligula velit. Curabitur tristique tempor
            accumsan.
          </p>
          <p>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Suspendisse justo risus, finibus nec feugiat
            lobortis, tincidunt vel ante.Suspendisse justo risus, finibus nec
            feugiat lobortis, tincidunt vel ante.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
