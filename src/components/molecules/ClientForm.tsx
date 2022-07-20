import React, { useState } from "react";

import "./clientForm.scss";
import infoJson from "../../data/dataProject.json";
import { clientInfo } from "../../types/Data";
import { Input } from "../atoms";

interface Props {
  client: "personal" | "professional";
}

const ClientForm: React.FC<Props> = ({ client }) => {
  const [clientInfo, setClientInfo] = useState<clientInfo>({});

  return (
    <div className="client-form-container">
      {client === "professional" && (
        <Input
          type="text"
          label="Votre entreprise (raison sociale)"
          onChange={(value) =>
            setClientInfo({ ...clientInfo, corporation: value })
          }
        />
      )}
      {client === "personal" ? (
        <Input
          type="text"
          label="Nom"
          onChange={(value) => setClientInfo({ ...clientInfo, name: value })}
        />
      ) : (
        <Input
          type="text"
          label="Nom du dirigeant"
          onChange={(value) => setClientInfo({ ...clientInfo, name: value })}
        />
      )}
      <Input
        type="email"
        label="Adresse mail"
        onChange={(value) => setClientInfo({ ...clientInfo, mail: value })}
      />
      <Input
        type="text"
        label="Code postal"
        onChange={(value) =>
          setClientInfo({ ...clientInfo, postal: parseInt(value) })
        }
      />
      <Input
        type="tel"
        label="Téléphone"
        onChange={(value) => setClientInfo({ ...clientInfo, phone: value })}
      />
    </div>
  );
};

export default ClientForm;
