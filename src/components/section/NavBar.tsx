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
                    {infoJson.Home.NavBar.Links.map((elm, index) => <div key={`div-${elm.title}`} id={`div-navbar${index}`}><a id={`navbar-${index}`} href="#">{elm.title}</a></div>)}
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