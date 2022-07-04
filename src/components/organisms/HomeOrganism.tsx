import React from "react";

import infoJson from '../../data/data.json';
import { Skills } from "../atoms";


const HomeOrganism: React.FC = () => {

    return (
        <>
            <h1>{infoJson.HomeTitle}</h1>
            <Skills title="Une solution clé en main" img="user" />
        </>
    )
}

export default HomeOrganism;
