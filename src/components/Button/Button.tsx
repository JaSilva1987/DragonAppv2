import React from "react";
import "./styles.css";
import { ButtonProps } from "./interfaces";

export const Button: React.FC<ButtonProps> = ({
  onClick,
  label,
  backgroundColor = "#4CAF50",
}) => {
  return (
    <button
      className="custom-button"
      onClick={onClick}
      style={{ backgroundColor }}
    >
      {label}
    </button>
  );
};
