import { CmsPropsType } from "lyatom-cms";

const data: CmsPropsType = {
  //Master
  branch: "dev", // Switch Branch to main for production
  repo: "NJG-connect/bina-web",
  urlForLogin: "admin", 
  mediaFolder: "/src/assets/images",
  title: "Bina", 
  type: "firstLvl",
  fields: [
    //Home Section
    {
      type: "section",
      title: "Accueil",
      file: "/src/data/data.json", 
      fields: [
        //NavBar
        {
          type: "object",
          title: "Navigation",
          id: "Home.NavBar",
          fields: [
            //Links
            {
              type: "array",
              title: "Liens",
              id: "Home.NavBar.Links",
              referenceFieldKey: "test",
              fields: [
                //Link Item
                {
                  type: "object",
                  title: "Lien 1",
                  id: "Home.NavBar.Links",
                  fields: [
                    //Text of link
                    {
                      type: "input",
                      title: "Texte",
                      id: "Home.NavBar.Links.text",
                      htmlId: "Nos-P",
                    },
                    //Link
                    {
                      type: "input",
                      title: "Lien",
                      id: "Home.NavBar.Links.link",
                      htmlId: "Nos-P",
                    },
                  ],
                },
                //Link Item
                {
                  type: "object",
                  title: "Lien 2",
                  id: "Home.NavBar.Links",
                  fields: [
                    //Text of link
                    {
                      type: "input",
                      title: "Texte",
                      id: "Home.NavBar.Links.text",
                      htmlId: "Nos-E",
                    },
                    //Link
                    {
                      type: "input",
                      title: "Lien",
                      id: "Home.NavBar.Links.link",
                      htmlId: "Nos-E",
                    },
                  ],
                },
                //Link Item
                {
                  type: "object",
                  title: "Lien 3",
                  id: "Home.NavBar.Links",
                  fields: [
                    //Text of link
                    {
                      type: "input",
                      title: "Texte",
                      id: "Home.NavBar.Links.text",
                      htmlId: "Votre",
                    },
                    //Link
                    {
                      type: "input",
                      title: "Lien",
                      id: "Home.NavBar.Links.link",
                      htmlId: "Votre",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default data;
