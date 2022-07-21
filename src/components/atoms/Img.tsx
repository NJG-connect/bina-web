import React from "react";

import "./img.scss";

interface Props {
  img: string;
  className?: string;
  htmlId?: string;
  size?: string;
}

const Img: React.FC<Props> = ({
  img,
  className = "",
  htmlId = "",
  size = "100%",
}) => {
  return (
    <div
      className={`${className} atom-img`}
      id={htmlId}
      style={{
        backgroundImage: `url(${require(`../../assets/images/${img}`)})`,
        backgroundSize: `${size}`,
      }}
    ></div>
  );
};

export default Img;
