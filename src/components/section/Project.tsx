import React from "react";

import infoJson from "../../data/data.json";
import "./project.scss";
import { Title } from "../atoms";
import { ProjectGallery } from "../molecules";

const Project: React.FC = () => {
  return (
    <section id="home-project">
      <Title value={infoJson.project.title} />
      <div className="gallery-container">
        <ProjectGallery
          bg={infoJson.project.project[0].background}
          title={infoJson.project.project[0].title}
          text={infoJson.project.project[0].text}
          img={infoJson.project.project[0].img.map((elm) => elm.item)}
          htmlId="project-gallery1"
        />
        <ProjectGallery
          bg={infoJson.project.project[1].background}
          title={infoJson.project.project[1].title}
          text={infoJson.project.project[1].text}
          img={infoJson.project.project[1].img.map((elm) => elm.item)}
          htmlId="project-gallery1"
        />
        <ProjectGallery
          bg={infoJson.project.project[2].background}
          title={infoJson.project.project[2].title}
          text={infoJson.project.project[2].text}
          img={infoJson.project.project[2].img.map((elm) => elm.item)}
          htmlId="project-gallery1"
        />
        <ProjectGallery
          bg={infoJson.project.project[3].background}
          title={infoJson.project.project[3].title}
          text={infoJson.project.project[3].text}
          img={infoJson.project.project[3].img.map((elm) => elm.item)}
          htmlId="project-gallery1"
        />
      </div>
    </section>
  );
};

export default Project;
