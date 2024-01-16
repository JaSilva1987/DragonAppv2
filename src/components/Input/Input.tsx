// src/components/Input/Input.tsx
import React from "react";
import "./styles.css";
import { InputProps } from "./interfaces";

export const Input: React.FC<InputProps> = ({ label, value, onChange }) => {
  return (
    <div className="input-container">
      <label>{label}</label>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
};
