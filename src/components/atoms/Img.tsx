import React from "react";

import images, { ImageType } from "../../assets/images";

interface Props {
    img: ImageType;
    className?: string;
    htmlId?: string;
  }
  
  const Img: React.FC<Props> = ({ img, className = '', htmlId = "" }) => {
    return (
      <div
        className={className}
        id={htmlId}
        style={{ backgroundImage: `url(` + images[img] + `)` }}></div>
    );
  };
  
  export default Img;