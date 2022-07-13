import React from "react";

import "./footer.scss";
import infoJson from "../../data/data.json";
import { Link, Img } from "../atoms";

const Footer: React.FC = () => {
  return (
    <footer id="footer">
      <div className="top">
        <div className="left">
          {infoJson.Footer.social.map((elm, index) => (
            <div className="item" key={`social${index}`}>
              <Link
                href={elm.link}
                htmlId={`social${index}`}
                value={elm.title}
              />
              <Img img={elm.icon} className="img" htmlId="social-icon" />
            </div>
          ))}
        </div>
        <div className="right">
          {infoJson.Footer.additionalLink.map((elm, index) => (
            <Link
              href={elm.link}
              htmlId={`addLink${index}`}
              value={elm.title}
            />
          ))}
        </div>
      </div>

      <div className="bottom">
        <p id="copyright">{infoJson.Footer.copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;
