import React, { useState } from "react";

import "./contact.scss";
import infoJson from "../../data/data.json";
import { verifForm, generateToast } from "../../utils/verifForm";
import { ImgTemplate, Input, Button } from "../atoms";

interface translate {
  name: string;
  phone: string;
  [key: string]: string;
}

const Contact: React.FC = () => {
  const [name, setName] = useState<string>();
  const [tel, setTel] = useState<string>();

  const translate: translate = {
    name: "Nom Prénom",
    phone: "Téléphone",
  };

  function verif() {
    if (verifForm({ name: name, phone: tel }) !== true) {
      const error: string[] = verifForm({ name, phone: tel }) as string[];
      if (error.length >= 2) {
        generateToast("Plusieurs champs sont incorrect.");
      } else {
        generateToast(`Le champs "${translate[error[0]]}" est incorrect.`);
      }
    }
  }

  return (
    <section id="contact">
      <ImgTemplate
        img="contact.png"
        className="background"
        htmlId="contact-background"
        size="cover"
      >
        <div className="main-container">
          <h3 id="contact-title">{infoJson.Contact.title}</h3>
          <p id="contact-subtitle">{infoJson.Contact.subtitle}</p>

          <div className="form-container">
            <div className="field-container">
              <Input
                type="text"
                onChange={(value) => setName(value)}
                placeholder="Nom Prénom"
                icon="user.png"
              />
              <Input
                type="tel"
                onChange={(value) => setTel(value)}
                placeholder="Tél"
                icon="phone.png"
              />
            </div>
            <Button
              value="Envoyer"
              className="contact-button"
              onClick={() => verif()}
            />
          </div>
        </div>
      </ImgTemplate>
    </section>
  );
};

export default Contact;
