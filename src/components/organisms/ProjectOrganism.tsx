import React, { useState } from "react";

import { Data } from "../../types/Data";
import { ChooseClient, ClientInfo } from "../section";

interface Props {}

const ProjectOrganism: React.FC<Props> = ({}) => {
  const [data, setData] = useState<Data>({
    step: "0",
    client: undefined,
    clientInfo: {
      name: "",
      mail: "",
      phone: "",
      postal: 0,
    },
  });

  const setClient: (client: "personal" | "professional") => void = (client) => {
    setData({
      ...data,
      step: "2",
      client,
    });
  };

  const goBack: () => void = () => {
    setData({
      ...data,
      step: String(parseInt(data.step) - 1),
    });
  };

  switch (data.step) {
    case "2":
      return (
        <ClientInfo
          onSubmit={(info) => console.log(info)}
          back={() => goBack()}
          clientType={data.client!}
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
