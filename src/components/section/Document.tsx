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
      <Img
        img={infoJson.screen5.background}
        className="left"
        size="cover"
        htmlId="project-screen5-bg"
      />
      <div className="right">
        <div className="top">
          <div className="arrow">
            <IconButton img="arrow.svg" onClick={back} />
          </div>
          <div className="bina-logo" onClick={home}></div>
        </div>
        <div className="mid">
          <h3 id="project-screen5-title">{infoJson.screen5.title}</h3>
          <InputFile
            htmlId="project-screen5-input-title"
            text={infoJson.screen5.inputText}
            onChange={(file) => setFiles([...files, file])}
          />
          <div className="file-container">
            <div
              className="wrapper"
              style={
                files.length === 0
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
                    key={`uploaded-file-${elm.name}-${index}`}
                  />
                ))
              ) : (
                <h1 className="title" id="project-screen5-empty-title">
                  {infoJson.screen5.emptyFileTitle}
                </h1>
              )}
            </div>
          </div>
        </div>
        <div className="bottom">
          <Button
            value={infoJson.screen5.button}
            onClick={() => onSubmit(files)}
            className="submit-button"
            htmlId="project-screen5-button-text"
          />
        </div>
      </div>
    </section>
  );
};

export default Document;
