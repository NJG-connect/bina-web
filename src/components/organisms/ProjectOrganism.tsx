import React from "react";

import infoJson from "../../data/data.json";

const ProjectOrganism: React.FC = () => {
  const step: string = "0";

  switch (step) {
    case "2":
      return <h1>Étape 1</h1>;
    case "3":
      return <h1>Étape 1</h1>;
    case "4":
      return <h1>Étape 1</h1>;
    case "5":
      return <h1>Étape 1</h1>;
    default:
      return <h1>Étape 1</h1>;
  }
};

export default ProjectOrganism;

/*

Context syntax
{
    step: string,
    client: "personal" | "corporation",
    clientInfo: {
        corporation?: string,
        name: string,
        mail: sting,
        phone: string (=> "+33 6")
    },
    service: "renovation complète" | "investisement locatif" | "rafraîchir et moderniser",
    mesure: {
        surfaceTotal: number,
        room: {
            bedroom: number,
            kitchen: number,
            livingRoom: number,
            bathroom: number,
            other: number
        }
    },
    files: file[]
}


*/
