// src/pages/Home/Home.tsx
import React, { useEffect, useState } from "react";
import { ResponsiveTable, Button, SideModal } from "../../components";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import DragonService from "../../services/DragonService";
import DragonFormPage from "../DragonFormPage/DragonFormPage";

const Home: React.FC = () => {
  const [dragons, setDragons] = useState<any[]>([]);
  const [isSideModalOpen, setIsSideModalOpen] = useState(false);

  const navigate = useNavigate(); // Alteração na declaração

  useEffect(() => {
    const fetchDragons = async () => {
      try {
        const dragonData = await DragonService.getAllDragons();
        setDragons(dragonData);
      } catch (error) {
        console.error("Error fetching dragons:", error);
      }
    };

    fetchDragons();
  }, []);

  const headers = ["id", "name", "type"];

  const handleNewDragonClick = () => {
    setIsSideModalOpen(true);
  };

  const handleAddNewDragonClick = () => {
    setIsSideModalOpen(false);
    navigate("/new-dragon"); // Alteração aqui para usar navigate
  };

  return (
    <>
      <div>
        <h1>Dragon List</h1>
        <ResponsiveTable headers={headers} data={dragons} />
      </div>
      <div className="button-container">
        <Button label="Novo Dragão" onClick={handleNewDragonClick} />
      </div>
      <SideModal
        isOpen={isSideModalOpen}
        onClose={() => setIsSideModalOpen(false)}
      >
        <DragonFormPage />
      </SideModal>
    </>
  );
};

export default Home;
