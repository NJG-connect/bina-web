import React from "react";

import infoJson from "../../data/data.json";
import {
  NavBar,
  Header,
  Contact,
  Footer,
  Sponsor,
  Quote,
  About,
  Project,
} from "../section";

const HomeOrganism: React.FC = () => {
  return (
    <>
      <NavBar />

      <Header />

      <Project />

      <About />

      <Sponsor />

      <Quote />

      <Contact />

      <Footer />
    </>
  );
};

export default HomeOrganism;
