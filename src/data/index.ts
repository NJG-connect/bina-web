import { CmsPropsType } from "lyatom-cms";

const data: CmsPropsType = {
  //Master
  branch: "dev-footer", // Switch Branch to main for production
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
        //Contact 
        {
          type: "object",
          title: "Contact",
          id: "Contact",
          fields: [
            //title
            {
              type: "input",
              title: "Titre",
              id: "title",
              htmlId: "contact-title"
            },
            //title (line 2)
            {
              type: "input",
              title: "Sous-title",
              id: "subtitle",
              htmlId: "contact-subtitle"
            },
            //Background Image
            {
              type: "image",
              title: "Image",
              mediaFolder: "src/assets/images",
              id: "background",
              htmlId: "contact-background"
            },
          ],
        },
        //Footer 
        {
          type: "object",
          title: "Pied de page",
          id: "Footer",
          fields: [
            //Copyright
            {
              type: "input",
              title: "Copyright",
              id: "copyright",
              htmlId: "copyright"
            },
            //Social
            {
              type: "array",
              title: "Liens réseaux sociaux",
              id: "social",
              referenceFieldKey: "title",
              canAdd: true,
              canDelete: true,
              fields: [
                {
                  type: "input",
                  htmlId: "social",
                  id: "title",
                  title: "Titre"
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