import React, { useState } from "react";

import "./contact.scss";
import images, { ImageType } from "../../assets/images";
import infoJson from "../../data/data.json";
import { ImgTemplate, Input, Button } from "../atoms";
import { toast } from "react-toastify";

const Contact: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [tel, setTel] = useState<string>("");

  function isName(name: string) {
    if (name.trim() != "") return true;
  }

  function isTel(tel: string) {
    return tel.match(/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/gim);
  }

  function verifForm() {
    if (isName(name) && isTel(tel)) {
      console.log(`Form Send : ${name} // ${tel}`);
    } else {
      toast.error("Veuillez remplir le formulaire correctement", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }

  return (
    <section id="contact">
      <ImgTemplate
        img="contact"
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
                icon="user"
              />
              <Input
                type="tel"
                onChange={(value) => setTel(value)}
                placeholder="Tél"
                icon="phone"
              />
            </div>
            <Button
              value="Envoyer"
              className="contact-button"
              onClick={verifForm}
            />
          </div>
        </div>
      </ImgTemplate>
    </section>
  );
};

export default Contact;
