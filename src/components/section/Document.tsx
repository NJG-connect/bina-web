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
      <Img img="choose.png" className="left" size="cover" />
      <div className="right">
        <div className="top">
          <div className="arrow">
            <IconButton img="arrow.svg" onClick={back} />
          </div>
          <div className="bina-logo"></div>
        </div>
        <div className="mid">
          <h3>Déposez vos documents</h3>
          <InputFile
            htmlId="project-screen5-input-title"
            text="Chargez vos documents"
            onChange={(file) => setFiles([...files, file])}
          />
          <div className="file-container">
            <div
              className="wrapper"
              style={
                files.length == 0
                  ? {
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }
                  : {}
              }
            >
              {files.length !== 0 ? (
                files.map((elm, index) => (
                  <UploadedFile
                    fileName={elm.name}
                    onRemove={() => remove(index)}
                  />
                ))
              ) : (
                <h1 className="title">Aucun document chargé</h1>
              )}
            </div>
          </div>
        </div>
        <div className="bottom">
          <Button
            value="Confier mon projet"
            onClick={() => onSubmit(files)}
            className="nav-button"
          />
        </div>
      </div>
    </section>
  );
};

export default Document;
