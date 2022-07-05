import React, { useState } from "react";
import { useNavigate } from "react-router";

import './navBar.scss';
import useWindowDimensions from "../../utils/windowSizeHook";

import { IconButton, Button } from "../atoms";

const NavBar: React.FC = () => {

    const navigate = useNavigate();

    const [column, setColumn] = useState<Boolean>(false);
    const { height, width } = useWindowDimensions();
    

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

            {width <= 1100 && <IconButton img="menu" onClick={() => setColumn(!column)} className="hamburger" />}

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