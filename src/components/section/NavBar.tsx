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
    

    return (
        <nav>

            <div className="bina-logo"></div>

            <div className={`right ${isColumn && "show slide-in"}`}>

            {width <= 1100 && <IconButton img="close" onClick={() => setIsColumn(!isColumn)} className="icon" />}

                <div className="navigation">
                    {infoJson.Home.NavBar.Links.map((elm, index) => <a id={`navbar-${index}`} key={elm} href="#">{elm}</a>)}
                </div>

                <div className="link">
                    <Button value={infoJson.Home.NavBar.Boutton} onClick={() => navigate("/project")} className="nav-button" id="navbar-button" />
                    <IconButton img="letter" onClick={() => {}} />
                </div>
            </div>

            {width <= 1100 && <IconButton img="menu" onClick={() => setIsColumn(!isColumn)} className="icon" />}

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