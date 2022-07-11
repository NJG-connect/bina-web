import React from "react";

import infoJson from '../../data/data.json';
import { NavBar, Header, Contact, Footer, Sponsor, Quote, Presentation } from "../section";


const HomeOrganism: React.FC = () => {

    return (
        <>
            <NavBar />

            <Header />

            <Presentation />

            <Sponsor />

            <Quote />

            <Contact />

            <Footer />
        </>
    )
}

export default HomeOrganism;
