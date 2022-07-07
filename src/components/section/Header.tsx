import React from "react";
import { useRef } from "react";

import './header.scss';
import { ImgTemplate } from "../atoms";

const Header: React.FC = () => {

    return (

        <header>
            <ImgTemplate className="header" htmlId="header" img="header">
                <h1>Un projet préparé, <br/>Un projet réussi...</h1>
            </ImgTemplate>
        </header>

    )

}


export default Header;