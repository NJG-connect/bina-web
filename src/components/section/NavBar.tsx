import React, { useState } from "react";
import { useNavigate } from "react-router";

import './navBar.scss';
import useWindowDimensions from "../../utils/windowSizeHook";
import { IconButton, Button } from "../atoms";
import infoJson from "../../data/data.json";
import { info } from "console";



const NavBar: React.FC = () => {

    const navigate = useNavigate();

    const [column, setColumn] = useState<Boolean>(false);
    const { height, width } = useWindowDimensions();
    

    return (
        <nav>

            <div className="bina-logo"></div>

            <div className={`right ${column && "show slide-in"}`}>

            {width <= 1100 && <IconButton img="close" onClick={() => setColumn(!column)} className="icon" />}

                <div className="navigation">
                    <a href={infoJson.Home.NavBar.Link1.link}>{infoJson.Home.NavBar.Link1.text}</a>
                    <a href={infoJson.Home.NavBar.Link2.link}>{infoJson.Home.NavBar.Link2.text}</a>
                    <a href={infoJson.Home.NavBar.Link3.link}>{infoJson.Home.NavBar.Link3.text}</a>
                </div>

                <div className="link">
                    <Button value={infoJson.Home.NavBar.Boutton} onClick={() => navigate("/project")} className="nav-button" />
                    <IconButton img="letter" onClick={() => {}} />
                </div>
            </div>

            {width <= 1100 && <IconButton img="menu" onClick={() => setColumn(!column)} className="icon" />}

        </nav>
    )

}

export default NavBar;



/*

2 etat -> "clasic" & "side"

1 section :

    redistribue mon html -> nav -- Bina & reste 
    Condition sur reste pour afficher ou non hamburger
    responsive css en remaniant les display 

*/