// src/pages/DragonFormPage/DragonFormPage.tsx
import React, { useState } from "react";
import { Button, Input, TextArea, Select } from "../../components";
import "./styles.css";

const DragonFormPage: React.FC = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [histories, setHistories] = useState("");

  const handleSave = () => {
    // Implemente a lógica para salvar os dados do dragão
    console.log("Dados do dragão salvos:", { name, type, histories });
  };

  return (
    <div className="dragon-form-container">
      <h1>Cadastro de Dragão</h1>
      <Input
        label="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Select
        label="Type"
        value={type}
        onChange={(e) => setType(e.target.value)}
        options={["Water", "Fire", "Air", "Dark", "Earth", "Light"]}
      />
      <TextArea
        label="Histórias"
        value={histories}
        onChange={(e) => setHistories(e.target.value)}
      />
      <Button label="Salvar" onClick={handleSave} />
    </div>
  );
};

export default DragonFormPage;
