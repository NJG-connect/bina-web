import React from "react";

import infoJson from "../../data/data.json";
import { Data } from "../../types/Data";
import { ChooseClient, ClientInfo } from "../section";

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

  const goBack: () => void = () => {
    setData((prevState) => ({
      ...prevState,
      step: String(parseInt(prevState.step) - 1),
    }));
  };

  switch (data.step) {
    case "2":
      return (
        <ClientInfo
          onSubmit={(info) => console.log(info)}
          back={() => goBack()}
          clientType={data.client as "personal" | "professional"} // Patch ??
        />
      );
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
