import React, { useState } from "react";

import "./clientInfo.scss";
import infoJson from "../../data/dataProject.json";
import { clientInfo, clientInfoKey } from "../../types/Data";
import { verifForm, generateToast } from "../../utils/verifForm";
import { Img, ProgressBar, IconButton } from "../atoms/";
import { ClientForm } from "../molecules/";

interface Props {
  onSubmit: (info: clientInfo) => void;
  back: () => void;
  clientType: "personal" | "professional";
  home: () => void;
}

interface translate {
  corporation: string;
  name: string;
  mail: string;
  postal: string;
  phone: string;
  [key: string]: string;
}

const ClientInfo: React.FC<Props> = ({ onSubmit, back, clientType, home }) => {
  const [clientInfo, setClientInfo] = useState<clientInfo>({});

  const translate: translate = {
    corporation: "Votre entreprise",
    name: "Nom",
    mail: "Adresse mail",
    postal: "Code postal",
    phone: "Téléphone",
  };

  function verif() {
    //Basic fields
    const field: clientInfo = {
      name: clientInfo.name,
      mail: clientInfo.mail,
      postal: clientInfo.postal,
      phone: clientInfo.phone,
    };

    //Additionnal field
    if (clientType === "professional") {
      field.corporation = clientInfo.corporation;
    }

    //Test if form is valid
    if (verifForm(field) === true) {
      //Submit result
      onSubmit(clientInfo);
    } else {
      //Send Error
      const error: string[] = verifForm(field) as string[];
      if (error.length >= 2) {
        generateToast("Plusieurs champs sont incorrect.");
      } else {
        generateToast(`Le champs "${translate[error[0]]}" est incorrect.`);
      }
    }
  }

  return (
    <section id="clientInfo">
      <Img img="choose.png" className="left-img" />
      <div className="right-container">
        <div className="top">
          <IconButton img="arrow.svg" onClick={back} className="back-button" />
          <div className="logo" onClick={home}></div>
        </div>
        <h3>Parlez nous de vous:</h3>
        <ClientForm
          client={clientType}
          update={(key: clientInfoKey, value: string | number) =>
            setClientInfo({ ...clientInfo, [key]: value })
          }
        />
        <div className="bottom">
          <IconButton
            img="arrow.svg"
            className="submit-button"
            onClick={verif}
          />
          <ProgressBar step={2} />
        </div>
      </div>
    </section>
  );
};

export default ClientInfo;
