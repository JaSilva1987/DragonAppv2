import React from "react";
import "./styles.css";
import { TextAreaProps } from "./interfaces";

export const TextArea: React.FC<TextAreaProps> = ({
  label,
  value,
  onChange,
}) => {
  return (
    <div className="textarea-container">
      <label>{label}</label>
      <textarea value={value} onChange={onChange} />
    </div>
  );
};
