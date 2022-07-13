import React from "react";

import infoJson from "../../data/data.json";
import { Data } from "../../types/Data";

interface Props {
  data: Data;
  setData: React.Dispatch<React.SetStateAction<Data>>;
}

const ProjectOrganism: React.FC<Props> = ({ data = {}, setData }) => {
  switch (data.step) {
    case "2":
      return <h1>Étape 2</h1>;
    case "3":
      return <h1>Étape 3</h1>;
    case "4":
      return <h1>Étape 4</h1>;
    case "5":
      return <h1>Étape 5</h1>;
    default:
      return (
        <button onClick={() => setData({ ...data, step: "2" })}>Étape 1</button>
      );
  }
};

export default ProjectOrganism;
