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
      title: "Section 1",
      file: "/src/data/info.json", // root path specifies info of the first section
      fields: [
      ],
    },
  ],
};

export default data;
