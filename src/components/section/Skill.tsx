import React from "react";

import "./skill.scss";
import infoJson from "../../data/data.json";

import { Skills, ImgTemplate } from "../atoms";
import { ImageType } from "../../assets/images";

const Skill: React.FC = () => {

    return (

        <ImgTemplate img={infoJson.skills.img as ImageType} htmlId="skills">
            <div className="content">
                {infoJson.skills.skill.map((elm, index) => (
                    <Skills title={elm.title} img={elm.icon as ImageType} />
                ))}
            </div>
        </ImgTemplate>

    )

}

export default Skill;