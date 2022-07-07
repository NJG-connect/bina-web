import React from "react";

import images, { ImageType } from "../../assets/images/";

interface Props {
  img: ImageType;
  className: string;
  children: React.ReactNode;
}

const ImgTemplate: React.FC<Props> = ({ img, className, children }) => {
  return (
    <div
      className={className}
      style={{ backgroundImage: `url(` + images[img] + `)` }}
    >
      {children}
    </div>
  );
};

export default ImgTemplate;
