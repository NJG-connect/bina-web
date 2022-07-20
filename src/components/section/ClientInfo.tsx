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
  home: any;
}

const ClientInfo: React.FC<Props> = ({ onSubmit, back, clientType, home }) => {
  const [clientInfo, setClientInfo] = useState<clientInfo>({});

  function verif() {
    const field: clientInfo = {
      name: clientInfo.name,
      mail: clientInfo.mail,
      postal: clientInfo.postal,
      phone: clientInfo.phone,
    };

    if (clientType === "professional") {
      field.corporation = clientInfo.corporation;
    }

    if (verifForm(field) === true) {
      onSubmit(clientInfo);
    } else {
      generateToast("Une erreur s'est produite");
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
