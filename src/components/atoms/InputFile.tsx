import React from "react";

import "./inputFile.scss";

interface Props {
  text: string;
  htmlId: string;
  onChange: (files: File) => void;
}

const InputFile: React.FC<Props> = ({ text, htmlId, onChange }) => {
  return (
    <div className="atom-input-file">
      <label htmlFor="input-file">
        <p id={htmlId}>{text}</p>
        <input
          type="file"
          name="file"
          id="input-file"
          onChange={(e) => onChange(e.target.files![0])}
        />
      </label>
    </div>
  );
};

export default InputFile;
