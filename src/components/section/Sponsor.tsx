import React from "react";

import './sponsor.scss';
import infoJson from "../../data/data.json";
import { Img, Title } from "../atoms/";
import { Slider } from "../molecules";
import { ImageType } from "../../assets/images/";

const Sponsor: React.FC = () => {

    return (
        <section id="sponsor">
            
            <Title value={infoJson.sponsor.title} htmlId="sponsor-title" />

            <Slider images={infoJson.sponsor.img.map(({title}: {title: string}) => title as ImageType)} />

        </section>
    )

}


export default Sponsor;