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
              htmlId: "navbar0",
            },
            //Link Item
            {
              type: "input",
              title: "Lien 2",
              id: "Links[1][title]",
              htmlId: "navbar1",
            },
            //Link Item
            {
              type: "input",
              title: "Lien 3",
              id: "Links[2][title]",
              htmlId: "navbar2",
            },
            //Button Text
            {
              type: "input",
              title: "Bouton",
              id: "Button",
              htmlId: "navbar-button",
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
              htmlId: "header-title1",
            },
            //title (line 2)
            {
              type: "input",
              title: "Titre (ligne 2)",
              id: "title.line2",
              htmlId: "header-title2",
            },
            //Background Image
            {
              type: "image",
              title: "Image",
              mediaFolder: "src/assets/images",
              id: "background",
              htmlId: "header",
            },
          ],
        },
        {
          type: "object",
          title: "Savoir-Faire",
          id: "knowhow",
          fields: [
            //Presentation
            {
              type: "object",
              title: "Présentation",
              id: "presentation",
              fields: [
                //title
                {
                  type: "input",
                  title: "Titre",
                  id: "title",
                  htmlId: "presentation-title",
                },
                //P1
                {
                  type: "input",
                  title: "Paragraphe 1",
                  id: "paragraph1",
                  htmlId: "presentation-p1",
                },
                //P2
                {
                  type: "input",
                  title: "Paragraphe 2",
                  id: "paragraph2",
                  htmlId: "presentation-p2",
                },
                //Background Image
                {
                  type: "image",
                  title: "Image",
                  mediaFolder: "src/assets/images",
                  id: "img",
                  htmlId: "presentation-img",
                },
              ],
            },
            //Skills
            {
              type: "object",
              title: "Compétences",
              id: "skills",
              fields: [
                //Background Image
                {
                  type: "image",
                  title: "Background",
                  mediaFolder: "src/assets/images",
                  id: "img",
                  htmlId: "skills",
                },
                {
                  type: "array",
                  title: "Compétences",
                  id: "skill",
                  referenceFieldKey: "title",
                  canAdd: false,
                  canDelete: false,
                  fields: [
                    {
                      type: "input",
                      htmlId: "skill-text",
                      id: "title",
                      title: "Titre",
                    },
                    {
                      type: "image",
                      title: "Icone",
                      mediaFolder: "src/assets/images",
                      id: "icon",
                      htmlId: "skill-img",
                    },
                  ],
                },
              ],
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
              htmlId: "sponsor-title",
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
                  htmlId: "sponsor-img",
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
              htmlId: "quote-sentence",
            },
            //Author
            {
              type: "input",
              title: "Auteur",
              id: "author",
              htmlId: "quote-author",
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
              htmlId: "contact-title",
            },
            //title (line 2)
            {
              type: "input",
              title: "Sous-title",
              id: "subtitle",
              htmlId: "contact-subtitle",
            },
            //Background Image
            {
              type: "image",
              title: "Image",
              mediaFolder: "src/assets/images",
              id: "background",
              htmlId: "contact-background",
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
              htmlId: "copyright",
            },
            //Social
            {
              type: "array",
              title: "Liens réseaux sociaux",
              id: "social",
              referenceFieldKey: "title",
              canAdd: false,
              canDelete: false,
              fields: [
                {
                  type: "input",
                  htmlId: "social",
                  id: "title",
                  title: "Titre",
                },
                {
                  type: "input",
                  htmlId: "social",
                  id: "link",
                  title: "Lien de redirection",
                },
                {
                  type: "image",
                  title: "Icone",
                  mediaFolder: "src/assets/images",
                  id: "icon",
                  htmlId: "social-icon",
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
                  htmlId: "add-link",
                  id: "title",
                  title: "Titre",
                },
                {
                  type: "input",
                  htmlId: "add-link",
                  id: "link",
                  title: "Lien de redirection",
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
