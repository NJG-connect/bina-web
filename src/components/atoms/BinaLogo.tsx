import React from "react";

import "./binaLogo.scss";
import { Img } from ".";

interface Props {
  size?: "md" | "lg";
  htmlId?: string;
  onClick?: () => void;
}

const BinaLogo: React.FC<Props> = ({ size = "lg", htmlId, onClick }) => {
  return (
    <div
      className={`atom-bina-logo-container ${
        size == "md"
          ? "atom-bina-logo-container-medium"
          : "atom-bina-logo-container-large"
      } ${onClick && "atom-bina-logo-container-pointer"}`}
      onClick={onClick}
    >
      <Img className="img" htmlId={htmlId} img="bina-logo.png" size="90%" />
    </div>
  );
};

export default BinaLogo;
