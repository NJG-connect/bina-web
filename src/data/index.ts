import { CmsPropsType } from "lyatom-cms";

const data: CmsPropsType = {
  //Master
  branch: "dev-header", // Switch Branch to main for production
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
              canDelete: false,
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
        //Header 
        {
          type: "object",
          title: "Header",
          id: "Header",
          fields: [
            //title (line 1)
            {
              type: "input",
              title: "Titre (ligne 1)",
              id: "title.line1",
              htmlId: "header-title1"
            },
            //title (line 2)
            {
              type: "input",
              title: "Titre (ligne 2)",
              id: "title.line2",
              htmlId: "header-title2"
            },
            //Background Image
            {
              type: "image",
              title: "Image",
              mediaFolder: "src/assets/images",
              id: "background",
              htmlId: "header"
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