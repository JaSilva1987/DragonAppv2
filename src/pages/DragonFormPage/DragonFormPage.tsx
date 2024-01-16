// src/pages/DragonFormPage/DragonFormPage.tsx
import React, { useState } from "react";
import { Input, Select, TextArea, Button, SideModal } from "../../components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const DragonFormPage: React.FC = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [histories, setHistories] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleSaveDragon = async () => {
    try {
      const response = await axios.post(
        "http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon",
        {
          name,
          type,
          histories,
          createdAt: new Date().toISOString(),
        }
      );

      console.log("Dragão criado com sucesso:", response.data);
      // Adicione lógica para atualizar o estado local (se necessário)
      //setIsModalOpen(false);
      //navigate("/"); // Navegue de volta para a página Home ou para onde for apropriado
    } catch (error) {
      console.error("Erro ao salvar dragão:", error);
      // Adicione lógica de tratamento de erros (se necessário)
    }
  };

  return (
    <div className="dragon-form-container">
      <h1>Novo Dragão</h1>
      <form>
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
        <Button label="Salvar Dragão" onClick={handleSaveDragon} />
      </form>
    </div>
  );
};

export default DragonFormPage;
