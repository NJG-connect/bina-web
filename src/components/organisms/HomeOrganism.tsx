import React from "react";

import infoJson from '../../data/data.json';
import { Skills } from "../atoms";


const HomeOrganism: React.FC = () => {

    return (
        <>
            <h1>{infoJson.HomeTitle}</h1>
            <Skills img="key" title="Une solution clé en main" />
        </>
    )
}

export default HomeOrganism;
