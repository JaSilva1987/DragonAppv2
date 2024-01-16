import React from "react";
import "./styles.css";
import { SelectProps } from "./interfaces";

export const Select: React.FC<SelectProps> = ({
  label,
  value,
  onChange,
  options,
}) => {
  return (
    <div className="select-container">
      <label>{label}</label>
      <select value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
