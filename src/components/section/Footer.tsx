import React from "react";

import './footer.scss';
import infoJson from '../../data/data.json';
import { Link, Img } from "../atoms";
import { ImageType } from "../../assets/images";


const Footer: React.FC = () => {

    return (

        <footer id="footer">
            
            <div className="top">
                <div className="left">
                    {infoJson.Footer.social.map((elm, index) => <Link href={elm.link} htmlId={`social${index}`} >{elm.title}<Img img={elm.icon as ImageType} className="img" /></Link>)}
                </div>
                <div className="right">
                    <Link href="#" value="Déposez un devis" />
                    <Link href="#" value="Demande de contact" />
                    <Link href="#" value="Condition Générales d'Utilisation" />
                </div>
            </div>

            <div className="bottom">
                <p id="copyright">{infoJson.Footer.copyright}</p>
            </div>

        </footer>

    )

}

export default Footer;