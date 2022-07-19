import React from "react";

import "./clientInfo.scss";
import infoJson from "../../data/dataProject.json";

interface Props {
  onSubmit: (info: clientInfo) => void;
  clientType: "personal" | "professional";
}

interface clientInfo {
  name: string;
  mail: string;
  phone: string;
  postal: number;
  corporation?: string;
}

const ClientInfo: React.FC<Props> = ({ onSubmit, clientType }) => {
  return <div>ClientInfo</div>;
};
