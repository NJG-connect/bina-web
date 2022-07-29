import React, { useState } from "react";

import "./zoomImg.scss";
import { Img, IconButton } from ".";

interface Props {
  img: string;
  htmlId: string;
  defaultStyle?: string;
  size?: string;
}

const ZoomImg: React.FC<Props> = ({ img, htmlId, defaultStyle = "", size }) => {
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  return (
    <div
      className={`zoom-img-container ${
        isFullscreen ? "zoom-img-container-fullscreen" : defaultStyle
      }`}
      onClick={(e) => {
        e.stopPropagation();
        setIsFullscreen(!isFullscreen);
      }}
    >
      <Img htmlId={htmlId} img={img} size={size} className="img" />
      {isFullscreen && (
        <div className="close-button-container">
          <IconButton img="close.png" onClick={() => setIsFullscreen(false)} />
        </div>
      )}
    </div>
  );
};

export default ZoomImg;
