// src/pages/DragonDetailsPage/DragonDetailsPage.tsx
import React from "react";
import "./styles.css";
import { DragonDetailsPageProps } from "./interfaces";
import { formatDateTime } from "../../services/DateService";

const DragonDetailsPage: React.FC<DragonDetailsPageProps> = ({ dragon }) => {
  return (
    <div className="dragon-details-container">
      <h2 className="dragon-details-title">Detalhes do Dragão</h2>
      <p className="dragon-details-info">ID: {dragon?.id}</p>
      <p className="dragon-details-info">Nome: {dragon?.name}</p>
      <p className="dragon-details-info">Tipo: {dragon?.type}</p>
      <p className="dragon-details-info">
        Criado: {dragon?.createdAt && formatDateTime(dragon.createdAt)}
      </p>
      <p className="dragon-details-info">História: {dragon?.histories}</p>
    </div>
  );
};

export default DragonDetailsPage;
