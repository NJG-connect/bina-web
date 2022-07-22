import React from "react";

import "./img.scss";

interface Props {
  img: string;
  className?: string;
  children: React.ReactNode;
  htmlId: string;
  size?: string;
}

const ImgTemplate: React.FC<Props> = ({
  img,
  className,
  children,
  htmlId,
  size = "100%",
}) => {
  return (
    <div
      className={`${className} atom-img-template`}
      style={{
        backgroundImage: `url(${require(`../../assets/images/${img}`)})`,
        backgroundSize: `${size}`,
      }}
      id={htmlId}
    >
      {children}
    </div>
  );
};

export default ImgTemplate;
