import React, { useState } from "react";

import infoJson from "../../data/dataProject.json";
import "./document.scss";
import { Img, Button, IconButton, InputFile } from "../atoms";
import { UploadedFile } from "../molecules";

interface Props {
  home: () => void;
  back: () => void;
  onSubmit: (files: File[]) => void;
  initialValue: File[];
}

const Document: React.FC<Props> = ({ home, back, onSubmit, initialValue }) => {
  const [files, setFiles] = useState<File[]>(initialValue);

  const remove: (index: number) => void = (index) => {
    const arr = [...files];
    arr.splice(index, 1);
    setFiles(arr);
  };

  return (
    <section id="document">
      <InputFile
        htmlId="project-screen5-input-title"
        text="Chargez vos documents"
        onChange={(file) => setFiles([...files, file])}
      />
      {files.length !== 0 &&
        files.map((elm, index) => (
          <UploadedFile fileName={elm.name} onRemove={() => remove(index)} />
        ))}
    </section>
  );
};

export default Document;
