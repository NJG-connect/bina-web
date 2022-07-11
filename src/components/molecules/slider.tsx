import React, { useRef } from "react";

import "./slider.scss";
import { Img } from "../atoms/";
import { ImageType } from "../../assets/images";
import { WSAEINVALIDPROCTABLE } from "constants";

interface Props {
  images: ImageType[];
}

const Slider: React.FC<Props> = ({ images }) => {
  const slider = useRef<HTMLDivElement>(null);

  function scrollSlider(direction: string) {
        if (direction == "left") {
            slider.current!.scrollLeft -= 650;
        } else {
            slider.current!.scrollLeft += 650;
        }
  }

  return (
    <div className="slider-container">
      <h1 onClick={() => scrollSlider("left")}>&#60;</h1>
      <div className="slider" ref={slider} id="test">
        {images.map((elm) => (
          <Img img={elm} className="img" />
        ))}
      </div>
      <h1 onClick={() => scrollSlider("right")}>&gt;</h1>
    </div>
  );
};

export default Slider;
