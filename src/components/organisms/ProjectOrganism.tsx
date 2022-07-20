import React, { useState, useEffect } from "react";

import { Data, clientInfo } from "../../types/Data";
import { ChooseClient, ClientInfo } from "../section";

interface Props {}

const ProjectOrganism: React.FC<Props> = ({}) => {
  const [data, setData] = useState<Data>({
    step: "0",
  });

  const setClient: (client: "personal" | "professional") => void = (client) => {
    setData({
      ...data,
      step: "2",
      client,
    });
  };

  const setClientInfo: (ClientInfo: clientInfo) => void = (ClientInfo) => {
    setData({
      ...data,
      step: "3",
      clientInfo: ClientInfo,
    });
  };

  const goBack: () => void = () => {
    setData({
      ...data,
      step: String(parseInt(data.step) - 1),
    });
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  switch (data.step) {
    case "2":
      return (
        <ClientInfo
          onSubmit={(info) => setClientInfo(info)}
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
