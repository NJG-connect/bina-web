import React from "react";

import "./footer.scss";
import infoJson from "../../data/data.json";
import { Link, Img } from "../atoms";
import { ImageType } from "../../assets/images";

const Footer: React.FC = () => {
  return (
    <footer id="footer">
      <div className="top">
        <div className="left">
          {infoJson.Footer.social.map((elm, index) => (
              <div className="item">
                <Link
                href={elm.link}
                key={`social${index}`}
                htmlId={`social${index}`}
                value={elm.title}
                />
                <Img img={elm.icon as ImageType} className="img" htmlId="social-icon" />
              </div>
          ))}
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
  );
};

export default Footer;
