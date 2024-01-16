import React, { PropsWithChildren } from "react";
import "./styles.css";
import { SideModalProps } from "./interface";

export const SideModal: React.FC<PropsWithChildren<SideModalProps>> = ({
  isOpen,
  onClose,
  children,
}) => {
  return (
    <div className={`side-modal ${isOpen ? "open" : ""}`}>
      <div className="side-modal-content">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <div className="side-modal-body">{children}</div>
      </div>
    </div>
  );
};
