import { CmsPropsType } from "lyatom-cms";

const data: CmsPropsType = {
  branch: "main", // Branch to update
  repo: "NJG-connect/bina-web", // Follows the pattern [org-or-username]/[repo-name]
  urlForLogin: "admin", // url for access of the panelAdmin
  mediaFolder: "/src/assets/images", // root path to the media files
  title: "Bina", // title in the PanelAdmin
  type: "firstLvl", // start always with this
  fields: [
    {
      type: "section", // start second with this its to create first section on Panel
      title: "Accueil",
      file: "/src/data/data.json", // root path specifies info of the first section
      fields: [
        {
          type: "input",
          title: "Title", // printing on AdminPanel
          id: "HomeTitle", // key reference in the file ( info.json)
          htmlId: "HomeTitle", // id to write in the html for real time editing
        },
      ],
    },
  ],
};

export default data;
