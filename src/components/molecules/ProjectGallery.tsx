import React, { useState } from "react";

import "./projectGallery.scss";
import { ImgTemplate, Img } from "../atoms";

interface Props {
  bg: string;
  title: string;
  text: string;
  htmlId: string;
  img: string[];
}

const ProjectGallery: React.FC<Props> = ({ bg, title, text, htmlId, img }) => {
  const [hover, setHover] = useState<boolean>(false);

  const imgArr: string[] = img;
  if (imgArr.length > 5) imgArr.length = 5;

  return (
    <ImgTemplate
      img={bg}
      className={`project-gallery-container ${
        hover
          ? "project-gallery-container-hover-mode"
          : "project-gallery-container-default-mode"
      }`}
      htmlId={`${htmlId}-bg`}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      onClick={() => setHover(!hover)}
      size="cover"
    >
      <h1
        className={`title ${
          hover ? "title-hover-mode hover-animation" : "title-default-mode"
        }`}
      >
        {title}
      </h1>
      {hover && (
        <div className="bottom-container">
          <p id={`${htmlId}-text`} className="text">
            {text}
          </p>
          <div className="project-img-container">
            {imgArr.map((elm, index) => (
              <Img
                className="project-img-item"
                htmlId={`${htmlId}-img-item-${index}`}
                img={elm}
                size="cover"
              />
            ))}
          </div>
        </div>
      )}
    </ImgTemplate>
  );
};

export default ProjectGallery;
