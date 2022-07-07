import React, { useState } from "react";

import "./contact.scss";
import images, { ImageType } from "../../assets/images";
import infoJson from "../../data/data.json";
import { ImgTemplate, Input, Button } from "../atoms";



const Contact: React.FC = () => {

    const [name, setName] = useState<string>("");
    const [tel, setTel] = useState<string>("");

    return (
        <section id="contact">
            
            <ImgTemplate img="header" className="background" htmlId="contact-background">

                <div className="main-container">
                    <h3>Pas le temps pour un devis. Laisser vos coordonnées, on vous rappelle</h3>
                    <p>Parce qu'il n'est pas toujours évident de savoir ce que l'on veut, on vous aide à faire votre choix avec un oeuil d'expert</p>

                    <div className="form-container">
                        <div className="field-container">
                            <Input type="text" onChange={(value) => setName(value)} placeholder="Nom Prénom" icon="user" />
                            <Input type="tel" onChange={(value) => setTel(value)} placeholder="Tél" icon="user" />
                        </div>
                        <Button value="Envoyer" className="contact-button" onClick={() => console.log(`Form Send : ${name} // ${tel}`)} />
                    </div>

                </div>

            </ImgTemplate>

        </section>
    )

} 

export default Contact;