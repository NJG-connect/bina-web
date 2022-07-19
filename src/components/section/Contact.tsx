import React, { useState } from "react";

import "./contact.scss";
import infoJson from "../../data/data.json";
import { verifForm } from "../../utils/verifForm";
import { ImgTemplate, Input, Button } from "../atoms";

const Contact: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [tel, setTel] = useState<string>("");

  return (
    <section id="contact">
      <ImgTemplate
        img="contact.png"
        className="background"
        htmlId="contact-background"
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
              onClick={() => verifForm({ name, phone: tel })}
            />
          </div>
        </div>
      </ImgTemplate>
    </section>
  );
};

export default Contact;
