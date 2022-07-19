import React from "react";

import infoJson from "../../data/data.json";
import { Data } from "../../types/Data";
import { ChooseClient } from "../section";

interface Props {
  data: Data;
  setData: React.Dispatch<React.SetStateAction<Data>>;
}

const ProjectOrganism: React.FC<Props> = ({ data = {}, setData }) => {
  const setClient: (client: "personal" | "professional") => void = (client) => {
    setData((prevState) => ({
      ...prevState,
      step: "2",
      client: client,
    }));
  };

  console.log({ ...data, step: "2" });

  switch (data.step) {
    case "2":
      return <h1>Step 2 {data.client}</h1>; // Return section with props (=> client type)
    case "3":
      return <h1>Étape 3</h1>;
    case "4":
      return <h1>Étape 4</h1>;
    case "5":
      return <h1>Étape 5</h1>;
    default:
      return <ChooseClient onClick={(client) => setClient(client)} />;
  }
};

export default ProjectOrganism;
