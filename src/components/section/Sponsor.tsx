import React from "react";

import "./sponsor.scss";
import infoJson from "../../data/data.json";
import { Img, Title } from "../atoms/";
import { Slider } from "../molecules";

const Sponsor: React.FC = () => {
  return (
    <section id="sponsor">
      <Title value={infoJson.sponsor.title} htmlId="sponsor-title" />

      {infoJson.sponsor.img.length > 3 ? (
        <Slider
          images={infoJson.sponsor.img.map(
            ({ title }: { title: string }) => title
          )}
        />
      ) : (
        <div className="slider-off">
          {infoJson.sponsor.img.map((elm) => (
            <Img img={elm.title} className="img" />
          ))}
        </div>
      )}
    </section>
  );
};

export default Sponsor;
