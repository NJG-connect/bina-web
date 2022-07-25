import React, { useState } from "react";

import "./surface.scss";
import infoJson from "../../data/dataProject.json";
import { Img, IconButton, ProgressBar, Input } from "../atoms/";
import { mesure } from "../../types/Data";

interface Props {}

const Surface: React.FC<Props> = ({}) => {
  const [mesure, setMesure] = useState<mesure>({});

  return (
    <Input
      onChange={(value: string) =>
        setMesure({ ...mesure, surfaceTotal: parseInt(value) })
      }
      type="number"
      value={mesure.surfaceTotal ? String(mesure.surfaceTotal) : "0"}
    />
  );
};

export default Surface;
