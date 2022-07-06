import { CmsPropsType } from "lyatom-cms";

const data: CmsPropsType = {
  //Master
  branch: "dev-navBar", // Switch Branch to main for production
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
          id: "NavBar",
          fields: [
            //Links
            {
              type: "array",
              title: "Liens",
              id: "Links",
              referenceFieldKey: "title",
              canAdd: false,
              fields: [
                //Link Item
                {
                  type: "input",
                  title: "Title",
                  id: "title",
                  htmlId: "navbar"
                },
              ],
            },
            //Button Text
            {
              type: "input",
              title: "Bouton",
              id: "Button",
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