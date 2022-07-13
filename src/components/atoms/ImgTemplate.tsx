import React from "react";

interface Props {
  img: string;
  className?: string;
  children: React.ReactNode;
  htmlId: string;
}

const ImgTemplate: React.FC<Props> = ({ img, className, children, htmlId }) => {
  return (
    <div
      className={className}
      style={{
        backgroundImage: `url(${require(`../../assets/images/${img}`)})`,
      }}
      id={htmlId}
    >
      {children}
    </div>
  );
};

export default ImgTemplate;
