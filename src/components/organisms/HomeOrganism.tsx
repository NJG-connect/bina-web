import React from "react";

import {
  NavBar,
  Header,
  Contact,
  Footer,
  Sponsor,
  Quote,
  About,
  Project,
  Skills,
  AccompanimentFs,
  AccompanimentSg,
} from "../section";

const HomeOrganism: React.FC = () => {
  return (
    <>
      <NavBar />

      <Header />

      <AccompanimentFs />

      <AccompanimentSg />

      <Skills />

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
