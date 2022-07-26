import React, { useState } from "react";

import infoJson from "../../data/dataProject.json";
import "./document.scss";
import { Img, Button, IconButton, InputFile } from "../atoms";

interface Props {
  home: () => void;
  back: () => void;
  onSubmit: (files: File[]) => void;
  initialValue: File[];
}

const Document: React.FC<Props> = ({ home, back, onSubmit, initialValue }) => {
  const [files, setFiles] = useState<File[]>([]);

  return (
    <section id="document">
      <InputFile
        htmlId="project-screen5-input-title"
        text="Chargez vos documents"
        onChange={(file) => setFiles([...files, file])}
      />
    </section>
  );
};

export default Document;
