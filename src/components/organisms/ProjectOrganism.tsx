import React, { useEffect, useState } from "react";

import { Data, clientInfo, services, mesure } from "../../types/Data";
import { ChooseClient, ClientInfo, Service, Surface } from "../section";

interface Props {
  goHome: () => void;
}

const ProjectOrganism: React.FC<Props> = ({ goHome }) => {
  const [data, setData] = useState<Data>({
    step: "0",
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

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

  const setService: (service: services) => void = (service) => {
    setData({
      ...data,
      step: "4",
      service: service,
    });
  };

  const setSurface: (surface: mesure) => void = (surface) => {
    setData({ ...data, step: "5", mesure: surface });
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
          onSubmit={(info) => setClientInfo(info)}
          back={() => goBack()}
          clientType={data.client!}
          home={goHome}
          intialValue={data.clientInfo ? data.clientInfo : {}}
        />
      );
    case "3":
      return (
        <Service
          back={() => goBack()}
          onClick={(service: services) => setService(service)}
          home={goHome}
        />
      );
    case "4":
      return (
        <Surface
          back={() => goBack()}
          home={goHome}
          onSubmit={(surface: mesure) => setSurface(surface)}
        />
      );
    case "5":
      return <h1>Étape 5</h1>;
    default:
      return (
        <ChooseClient onClick={(client) => setClient(client)} home={goHome} />
      );
  }
};

export default ProjectOrganism;
