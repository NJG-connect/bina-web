import React from "react";

import './skills.scss';
import { ImageType } from "../../assets/images";
import { Img } from './';

interface Props {
    title: string;
    img: ImageType;
}

const Skills: React.FC<Props> = ({title, img}) => {

    return (
        <div className="skills-item">
            <Img img={img} className="img" />
            <h4>{title}</h4>
        </div>
    )

}

export default Skills