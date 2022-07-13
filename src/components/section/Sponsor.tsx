import React from "react";

import "./sponsor.scss";
import infoJson from "../../data/data.json";
import { Img, Title } from "../atoms/";
import { Slider } from "../molecules";

const Sponsor: React.FC = () => {
  return (
    <section id="sponsor">
      <Title value={infoJson.sponsor.title} htmlId="sponsor-title" />

      <Slider
        images={infoJson.sponsor.img.map(
          ({ title }: { title: string }) => title
        )}
      />
    </section>
  );
};

export default Sponsor;
