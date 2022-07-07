import React from "react";
import { useRef } from "react";

import './header.scss';
import infoJson from "../../data/data.json";
import { ImgTemplate } from "../atoms";


const Header: React.FC = () => {

    return (

        <header>
            <ImgTemplate className="header" htmlId="header" img="header">
                <h1 id="header-title">{infoJson.Header.title.line1}<br/>{infoJson.Header.title.line2}</h1>
            </ImgTemplate>
        </header>

    )

}


export default Header;