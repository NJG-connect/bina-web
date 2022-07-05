import React from "react";

import "./input.scss";
import { ImageType } from "../../assets/images";
import { Img } from "./";

interface Props {
  type: "text" | "tel" | "email";
  placeholder?: string;
  label?: string;
  icon?: ImageType;
  onChange: (value: string) => void;
}

const Input: React.FC<Props> = ({
  type,
  placeholder = "",
  label,
  icon,
  onChange,
}) => {
  return (
    <div className={`input-container ${icon && "icon-mode"}`}>
      {label && <label>{label} :</label>}
      <input
        className={label && "input"}
        type={type}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
      {icon && <Img img={icon} className="icon" />}
    </div>
  );
};

export default Input;
