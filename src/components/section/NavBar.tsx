import React from "react";
import { useNavigate } from "react-router";

import './navBar.scss';

import { IconButton, Button } from "../atoms";

const NavBar: React.FC = () => {

    const navigate = useNavigate();

    return (
        <nav>

            <div className="bina-logo"></div>

            <div className="right">

                <div className="navigation">
                    <a href="#" className="l">Nos projets</a>
                    <a href="#">Nos engagements</a>
                    <a href="#">Votre tranquilité</a>
                </div>

                <div className="link">
                    <Button value="Préparer mon projet" onClick={() => navigate("/project")} className="nav-button" />
                    <IconButton img="letter" onClick={() => {}} />
                </div>
            </div>

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