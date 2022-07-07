import React, { useState } from "react";
import { useNavigate } from "react-router";

import './navBar.scss';
import useWindowDimensions from "../../utils/windowSizeHook";
import { IconButton, Button } from "../atoms";
import infoJson from "../../data/data.json";



const NavBar: React.FC = () => {

    const navigate = useNavigate();

    const [isColumn, setIsColumn] = useState<Boolean>(false);
    const { height, width } = useWindowDimensions();
    
    function test() {
        const elm = document.querySelector("#header");
        elm?.scrollIntoView()
    }

    return (
        <nav>

            <div className="bina-logo" onClick={test}></div>

            <div className={`right ${isColumn && "show slide-in"}`}>

            {width <= 1100 && <IconButton img="close" onClick={() => setIsColumn(!isColumn)} className="icon" />}

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