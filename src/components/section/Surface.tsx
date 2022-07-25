import React, { useEffect, useState } from "react";

import "./surface.scss";
import infoJson from "../../data/dataProject.json";
import { Img, IconButton, ProgressBar } from "../atoms/";
import { NumberProjectCard } from "../molecules/";
import { mesure } from "../../types/Data";

interface Props {}

const Surface: React.FC<Props> = ({}) => {
  const [mesure, setMesure] = useState<mesure>({});

  useEffect(() => {
    console.log(mesure);
  }, [mesure]);

  return (
    <section id="surface">
      <div className="left">
        <div className="top">
          <IconButton img="arrow.svg" onClick={() => {}} />
          <div className="bina-logo"></div>
        </div>
        <div className="mid">
          <div className="top">
            <h3>De quel surface</h3>
            <NumberProjectCard
              img="key.svg"
              text="Surface"
              metter={true}
              value={mesure.surfaceTotal ? String(mesure.surfaceTotal) : "0"}
              update={(number) =>
                setMesure({ ...mesure, surfaceTotal: parseInt(number) })
              }
            />
          </div>
          <div className="bottom">
            <h3>Pour combien de pièces ?</h3>
            <div className="container">
              <NumberProjectCard
                img="key.svg"
                text="Chambre"
                value={mesure.room?.bedroom ? String(mesure.room.bedroom) : "0"}
                update={(number) =>
                  setMesure({
                    ...mesure,
                    room: { ...mesure.room, bedroom: parseInt(number) },
                  })
                }
              />
            </div>
          </div>
        </div>
        <div className="bottom">
          <IconButton img="arrow.svg" onClick={() => {}} />
          <ProgressBar step={4} />
        </div>
      </div>
      <Img img="choose.png" className="right" />
    </section>
  );
};

export default Surface;
