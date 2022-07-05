import React from "react";

import infoJson from '../../data/data.json';
import {  } from "../atoms";


const HomeOrganism: React.FC = () => {

    return (
        <>
            <h1 id="HomeTitle">{infoJson.HomeTitle}</h1>
        </>
    )
}

export default HomeOrganism;
