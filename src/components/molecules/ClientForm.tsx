import React from "react";

import "./clientForm.scss";
import infoJson from "../../data/dataProject.json";
import { clientInfoKey } from "../../types/Data";
import { Input } from "../atoms";

interface Props {
  client: "personal" | "professional";
  update: (key: clientInfoKey, value: string | number) => void;
}

const ClientForm: React.FC<Props> = ({ client, update }) => {
  return (
    <div className="client-form-container">
      {client === "professional" && (
        <Input
          type="text"
          label="Votre entreprise (raison sociale)"
          onChange={(value) => update("corporation", value)}
        />
      )}
      {client === "personal" ? (
        <Input
          type="text"
          label="Nom"
          onChange={(value) => update("name", value)}
        />
      ) : (
        <Input
          type="text"
          label="Nom du dirigeant"
          onChange={(value) => update("name", value)}
        />
      )}
      <Input
        type="email"
        label="Adresse mail"
        onChange={(value) => update("mail", value)}
      />
      <Input
        type="text"
        label="Code postal"
        onChange={(value) => update("postal", parseInt(value))}
      />
      <Input
        type="tel"
        label="Téléphone"
        onChange={(value) => update("phone", value)}
      />
    </div>
  );
};

export default ClientForm;
