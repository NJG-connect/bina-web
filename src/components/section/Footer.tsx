import React from "react";

import './footer.scss';
import infoJson from '../../data/data.json';
import { Link } from "../atoms";

const Footer: React.FC = () => {

    return (

        <footer id="footer">
            
            <div className="top">
                <div className="left">
                    {infoJson.Footer.social.map(elm => <Link href={elm.link}>{elm.title}</Link>)}
                </div>
                <div className="right">
                    <Link href="#" value="Déposez un devis" />
                    <Link href="#" value="Demande de contact" />
                    <Link href="#" value="Condition Générales d'Utilisation" />
                </div>
            </div>

            <div className="bottom">
                <p>{infoJson.Footer.copyright}</p>
            </div>

        </footer>

    )

}

export default Footer;