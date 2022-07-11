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
          id: "NavBar",
          fields: [
            //Link Item
            {
              type: "input",
              title: "Lien 1",
              id: "Links[0][title]",
              htmlId: "navbar0"
            },
            //Link Item
            {
              type: "input",
              title: "Lien 2",
              id: "Links[1][title]",
              htmlId: "navbar1"
            },
            //Link Item
            {
              type: "input",
              title: "Lien 3",
              id: "Links[2][title]",
              htmlId: "navbar2"
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
        //Sponsor 
        {
          type: "object",
          title: "Partenaires",
          id: "sponsor",
          fields: [
            //Copyright
            {
              type: "input",
              title: "Titre",
              id: "title",
              htmlId: "sponsor-title"
            },
            //Social
            {
              type: "array",
              title: "Logo partenaires",
              id: "img",
              referenceFieldKey: "title",
              canAdd: true,
              canDelete: true,
              fields: [
                {
                  type: "image",
                  title: "Logo",
                  mediaFolder: "src/assets/images",
                  id: "title",
                  htmlId: "sponsor-img"
                },
              ],
            },
          ],
        },
        //Quote 
        {
          type: "object",
          title: "Citation",
          id: "quote",
          fields: [
            //Sentence
            {
              type: "input",
              title: "Citation",
              id: "sentence",
              htmlId: "quote-sentence"
            },
            //Author
            {
              type: "input",
              title: "Auteur",
              id: "author",
              htmlId: "quote-author"
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
                {
                  type: "input",
                  htmlId: "social",
                  id: "link",
                  title: "Lien de redirection"
                },
                {
                  type: "image",
                  title: "Icone",
                  mediaFolder: "src/assets/images",
                  id: "icon",
                  htmlId: "social-icon"
                },
              ],
            },
            //Additional Link
            {
              type: "array",
              title: "Liens supplémentaires",
              id: "additionalLink",
              referenceFieldKey: "title",
              canAdd: false,
              canDelete: false,
              fields: [
                {
                  type: "input",
                  htmlId: "addLink",
                  id: "title",
                  title: "Titre"
                },
                {
                  type: "input",
                  htmlId: "addLink",
                  id: "link",
                  title: "Lien de redirection"
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