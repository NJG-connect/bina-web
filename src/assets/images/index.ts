import collaboration from "./collaboration.svg";
import delay from "./delay.svg";
import handleshake from "./handleshake.svg";
import improvement from "./improvement.svg";
import key from "./key.svg";
import sheild from "./sheild.svg";
import addFile from "./addFile.svg";
import approve from "./approve.svg";
import colab from "./colab.svg";
import corp1 from "./corp1.svg";
import corp2 from "./corp2.svg";
import corp3 from "./corp3.svg";
import corp4 from "./corp4.svg";
import crossair from "./crossair.svg";
import key2 from "./key2.svg";
import like from ".like.svg";

export type ImageType =
  | "user"
  | "collaboration"
  | "delay"
  | "handleshake"
  | "improvement"
  | "key"
  | "sheild"
  | "letter"
  | "menu"
  | "close"
  | "header"
  | "phone"
  | "addFile"
  | "approve"
  | "colab"
  | "corp1"
  | "corp2"
  | "corp3"
  | "corp4"
  | "crossair"
  | "key2"
  | "like"
  | "contact";

const images: { [key in ImageType]: any } = {
  user: require("./user.png"),
  letter: require("./letter.png"),
  menu: require("./menu.png"),
  close: require("./close.png"),
  header: require("./header.png"),
  phone: require("./phone.png"),
  contact: require("./contact.png"),
  collaboration,
  delay,
  handleshake,
  improvement,
  key,
  sheild,
  addFile,
  approve,
  colab,
  corp1,
  corp2,
  corp3,
  corp4,
  crossair,
  key2,
  like,
};

export default images;
