import React from "react";

import "./button.scss";

interface Props {
  value: string;
  className: "nav-button" | "contact-button";
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
    <div id={htmlId} className={`button ${className}`} onClick={onClick}>
      {value}
    </div>
  );
};

export default Button;
