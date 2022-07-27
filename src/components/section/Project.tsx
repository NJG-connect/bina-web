import React from "react";

import infoJson from "../../data/data.json";
import "./project.scss";
import { Title } from "../atoms";
import { ProjectGallery } from "../molecules";

const Project: React.FC = () => {
  return (
    <section id="home-project">
      <Title value="Nos projet" />
      <div className="gallery-container">
        <ProjectGallery
          bg="choose.png"
          title="Hôtellerie & Restauration"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate consequuntur iste nostrum magnam illo excepturi iure doloremque deleniti voluptatem molestias!"
          img={[
            "header.png",
            "header.png",
            "header.png",
            "header.png",
            "header.png",
          ]}
          htmlId="project-gallery1"
        />
        <ProjectGallery
          bg="choose.png"
          title="Hôtellerie & Restauration"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate consequuntur iste nostrum magnam illo excepturi iure doloremque deleniti voluptatem molestias!"
          img={[
            "header.png",
            "header.png",
            "header.png",
            "header.png",
            "header.png",
          ]}
          htmlId="project-gallery1"
        />
        <ProjectGallery
          bg="choose.png"
          title="Hôtellerie & Restauration"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate consequuntur iste nostrum magnam illo excepturi iure doloremque deleniti voluptatem molestias!"
          img={[
            "header.png",
            "header.png",
            "header.png",
            "header.png",
            "header.png",
          ]}
          htmlId="project-gallery1"
        />
        <ProjectGallery
          bg="choose.png"
          title="Hôtellerie & Restauration"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate consequuntur iste nostrum magnam illo excepturi iure doloremque deleniti voluptatem molestias!"
          img={[
            "header.png",
            "header.png",
            "header.png",
            "header.png",
            "header.png",
          ]}
          htmlId="project-gallery1"
        />
      </div>
    </section>
  );
};

export default Project;
