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
              referenceFieldKey: "Home.NavBar.Links",
              fields: [
                //Link Item
                {
                  type: "input",
                  title: "Title",
                  id: "Home.NavBar.Links",
                  htmlId: "navbar-"
                },
              ],
            },
            //Button Text
            {
              type: "input",
              title: "Bouton",
              id: "Home.NavBar.Button",
              htmlId: "navbar-button"
            },
          ],
        },
      ],
    },
  ],
};

export default data;


/*

{
  Home: {
    Navbar: {
      => Trois liens + Boutton
      Links: [
        input1,
        input2,       ==> Gère le href en dur 
        input3        ==> id ? -> Création de l'id sous forme = navbar-<index>
      ],
      Button (inputType)
    },
    Header: {

    },
    ...
  }
}

{
  
  screen1: {

  },
  ...
  }
}




"Links": [
        {
          "text": "Nos Projets",
          "link": "#"
        },
        {
          "text": "Nos Engagements",
          "link": "#"
        },
        {
          "text": "Votre Tranquilité",
          "link": "#"
        }
      ],


*/