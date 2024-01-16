// Home.tsx
import React, { useEffect, useState } from "react";
import { ResponsiveTable, Button, SideModal } from "../../components";
import { Dragon } from "./interfaces";
import DragonDetailsPage from "../DragonDetailsPage/DragonDetailsPage";
import { formatDateTime } from "../../services/DateService";
import DragonFormPage from "../DragonFormPage/DragonFormPage";
import "./styles.css";
import DragonService from "../../services/DragonService";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const [dragons, setDragons] = useState<Dragon[]>([]);
  const [selectedDragon, setSelectedDragon] = useState<Dragon | null>(null);
  const [isSideModalOpen, setIsSideModalOpen] = useState(false);
  const [isNewDragonFormOpen, setIsNewDragonFormOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDragons = async () => {
      try {
        const dragonData: Dragon[] = await DragonService.getAllDragons();

        const dragonsWithActions = dragonData.map((dragon) => ({
          ...dragon,
          createdAt: formatDateTime(dragon.createdAt),
          actions: (
            <div className="action-buttons">
              <Button
                label="Detalhes"
                onClick={() => {
                  setSelectedDragon(dragon);
                  setIsSideModalOpen(true);
                }}
              />
              <Button
                label="Remover"
                onClick={() => handleRemoveDragon(dragon.id)}
              />
              <Button
                label="Atualizar"
                onClick={() => {
                  console.log("Atualizar o dragão com ID:", dragon.id);
                }}
              />
            </div>
          ),
        }));

        setDragons(dragonsWithActions);
      } catch (error) {
        console.error("Error fetching dragons:", error);
      }
    };

    fetchDragons();
  }, []);

  const headers = ["name", "type", "createdAt", "actions"];

  const handleNewDragonClick = () => {
    setIsSideModalOpen(true);
    setIsNewDragonFormOpen(true);
  };

  const handleCloseModal = () => {
    setIsSideModalOpen(false);
    setSelectedDragon(null);
    setIsNewDragonFormOpen(false);
  };

  const handleRemoveDragon = async (dragonId: string) => {
    await DragonService.deleteDragon(dragonId);
    navigate("/");
    setDragons((prevDragons) =>
      prevDragons.filter((dragon) => dragon.id !== dragonId)
    );
  };

  const updateDragonList = (newDragon: Dragon) => {
    setDragons((prevDragons) => [...prevDragons, newDragon]);
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
      <SideModal isOpen={isSideModalOpen} onClose={handleCloseModal}>
        {selectedDragon ? (
          <DragonDetailsPage dragon={selectedDragon} />
        ) : isNewDragonFormOpen ? (
          <DragonFormPage
            onClose={handleCloseModal}
            updateDragonList={updateDragonList}
          />
        ) : null}
      </SideModal>
    </>
  );
};

export default Home;
