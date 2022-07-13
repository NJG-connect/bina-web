import React, { useState } from "react";

import { ProjectOrganism } from "../organisms/";
import { Data } from "../../types/Data";

const ProjectContainer: React.FC = () => {
  const [data, setData] = useState({
    step: "0",
  });

  return <ProjectOrganism data={data} setData={setData} />;
};

export default ProjectContainer;

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
