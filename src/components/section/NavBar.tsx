import React, { useState, useRef } from "react";
import { useNavigate } from "react-router";

import './navBar.scss';
import useWindowDimensions from "../../utils/windowSizeHook";
import { IconButton, Button } from "../atoms";
import infoJson from "../../data/data.json";



const NavBar: React.FC = () => {

    const navigate = useNavigate();

    const [isColumn, setIsColumn] = useState<Boolean>(false);
    const navElm = useRef(null);
    const { height, width } = useWindowDimensions();
    
    function scrollToHeader() {
        const elm = document.querySelector("#header");
        elm?.scrollIntoView()
    }


    const onClose: () => void = () => {
        const elm: any = navElm.current;
        elm.className = "right show slide-out";
        setTimeout(() => setIsColumn(!isColumn), 700);
    }

    return (
        <nav>

            <div className="bina-logo" onClick={scrollToHeader}></div>

            <div className={`right ${isColumn && "show slide-in"}`} ref={navElm}>

            {width <= 1100 && <IconButton img="close" onClick={onClose} className="icon" />}

                <div className="navigation">
                    {infoJson.NavBar.Links.map((elm, index) => <a id={`navbar${index}`} key={`link-${elm.title}`} href="#">{elm.title}</a>)}
                </div>

                <div className="link">  
                    <Button value={infoJson.NavBar.Boutton} onClick={() => navigate("/project")} className="nav-button" htmlId="navbar-button" />
                    <IconButton img="letter" onClick={() => {}} />
                </div>
            </div>

            {width <= 1100 && <IconButton img="menu" onClick={() => setIsColumn(!isColumn)} className="icon" />}

        </nav>
    )

}

export default NavBar;