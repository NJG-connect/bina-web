import React from "react";

import "./button.scss";
import { Img } from "./";

interface Props {
  value: string;
  className: "nav-button" | "contact-button" | "submit-button";
  onClick: () => void;
  htmlId?: string;
}

const Button: React.FC<Props> = ({
  value,
  className,
  onClick = () => {},
  htmlId,
}) => {
  return (
    <div id={htmlId} className={`atom-button ${className}`} onClick={onClick}>
      {value}
      {className === "submit-button" && <Img className="img" img="check.png" />}
    </div>
  );
};

export default Button;
