import React from "react";

import "./iconButton.scss";
import { Img } from "./";

interface Props {
  img: string;
  onClick: () => void;
  className?: string;
}

const IconButton: React.FC<Props> = ({ img, onClick, className }) => {
  return (
    <div
      className={`${className ? className : "icon-button-container"} pointer`}
      onClick={onClick}
    >
      <Img img={img} className="icon-button-img" size="100%" />
    </div>
  );
};

export default IconButton;
