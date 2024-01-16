import React, { useState } from "react";
import { Input, Select, TextArea, Button } from "../../components";
import DragonService from "../../services/DragonService";
import "./styles.css";
import { DragonFormPageProps } from "./interfaces";

const DragonFormPage: React.FC<DragonFormPageProps> = ({
  onClose,
  updateDragonList,
}) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [histories, setHistories] = useState("");

  const handleSaveDragon = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await DragonService.createDragon({
        name,
        type,
        histories,
        createdAt: new Date().toISOString(),
      });

      console.log("Dragão criado com sucesso!");
      onClose?.(); // Fecha o modal após o salvamento

      // Chama a função de atualização na Home
      updateDragonList(response);
    } catch (error) {
      console.error("Erro ao salvar dragão:", error);
    }
  };

  return (
    <div className="dragon-form-container">
      <h1>Novo Dragão</h1>
      <form onSubmit={handleSaveDragon}>
        <Input
          label="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Select
          label="Tipo"
          value={type}
          onChange={(e) => setType(e.target.value)}
          options={["Water", "Fire", "Air", "Dark", "Earth", "Light"]}
        />
        <TextArea
          label="Histórias"
          value={histories}
          onChange={(e) => setHistories(e.target.value)}
        />
        <Button type="submit" label="Salvar Dragão" />
      </form>
    </div>
  );
};

export default DragonFormPage;
