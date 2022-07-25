import React, { useState, useRef } from "react";
import { useNavigate } from "react-router";

import "./navBar.scss";
import useWindowDimensions from "../../utils/windowSizeHook";
import { IconButton, Button, Link } from "../atoms";
import infoJson from "../../data/data.json";

const NavBar: React.FC = () => {
  const navigate = useNavigate();

  const [isColumn, setIsColumn] = useState<Boolean>(false);
  const navElm = useRef(null);
  const { height, width } = useWindowDimensions();

  function scrollToHeader() {
    const elm = document.querySelector("#header");
    elm?.scrollIntoView();
  }

  function scrollToContact() {
    const elm = document.querySelector("#contact");
    elm?.scrollIntoView();
  }

  const onClose: () => void = () => {
    const elm: any = navElm.current;
    elm.className = "right show slide-out";
    setTimeout(() => setIsColumn(!isColumn), 700);
  };

  return (
    <nav id="home-nav">
      <div className="bina-logo" onClick={scrollToHeader}></div>

      <div className={`right ${isColumn && "show slide-in"}`} ref={navElm}>
        {width <= 1100 && (
          <div className="icon">
            <IconButton img="close.png" onClick={onClose} />
          </div>
        )}

        <div className="navigation">
          {infoJson.NavBar.Links.map((elm, index) => (
            <Link
              htmlId={`navbar${index}`}
              key={`link-${elm.title}`}
              href={elm.href}
              value={elm.title}
            />
          ))}
        </div>

        <div className="link">
          <Button
            value={infoJson.NavBar.Boutton}
            onClick={() => navigate("/project")}
            className="nav-button"
            htmlId="navbar-button"
          />
          <IconButton
            img="letter.png"
            onClick={() => scrollToContact()}
            style={{ border: "black" }}
          />
        </div>
      </div>

      {width <= 1100 && (
        <div className="icon">
          <IconButton img="menu.png" onClick={() => setIsColumn(!isColumn)} />
        </div>
      )}
    </nav>
  );
};

export default NavBar;
