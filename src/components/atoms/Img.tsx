import React from "react";

interface Props {
  img: string;
  className?: string;
  htmlId?: string;
}

const Img: React.FC<Props> = ({ img, className = "", htmlId = "" }) => {
  return (
    <div
      className={className}
      id={htmlId}
      style={{
        backgroundImage: `url(${require(`../../assets/images/${img}`)})`,
      }}
    ></div>
  );
};

export default Img;
