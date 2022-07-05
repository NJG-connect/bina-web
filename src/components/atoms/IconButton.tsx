import React from "react";

import { ImageType } from "../../assets/images";
import './iconButton.scss';
import { Img } from "./";

interface Props {
    img: ImageType;
    onClick: () => void;
}

const IconButton: React.FC<Props> = ({img, onClick}) => {

    return <div className="icon-button-container" onClick={onClick}><Img img={img} className="img" /></div>

}

export default IconButton;