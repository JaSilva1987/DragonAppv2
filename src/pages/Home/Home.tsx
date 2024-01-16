// src/pages/Home/Home.tsx
import React, { useEffect, useState } from "react";
import DragonService from "../../services/DragonService";
import { ResponsiveTable, Button, SideModal } from "../../components";
import { Dragon } from "./interfaces";
import DragonDetailsPage from "../DragonDetailsPage/DragonDetailsPage";

const Home: React.FC = () => {
  const [dragons, setDragons] = useState<Dragon[]>([]);
  const [selectedDragon, setSelectedDragon] = useState<Dragon | null>(null);
  const [isSideModalOpen, setIsSideModalOpen] = useState(false);

  useEffect(() => {
    const fetchDragons = async () => {
      try {
        const dragonData: Dragon[] = await DragonService.getAllDragons();

        const dragonsWithAction = dragonData.map((dragon) => ({
          ...dragon,
          action: (
            <Button
              label="Detalhes"
              onClick={() => {
                setSelectedDragon(dragon);
                setIsSideModalOpen(true);
              }}
            />
          ),
        }));

        setDragons(dragonsWithAction);
      } catch (error) {
        console.error("Error fetching dragons:", error);
      }
    };

    fetchDragons();
  }, []);

  const headers = ["id", "name", "type", "action"];

  return (
    <>
      <div>
        <h1>Dragon List</h1>
        <ResponsiveTable headers={headers} data={dragons} />
      </div>
      <div className="button-container">
        <Button
          label="Novo Dragão"
          onClick={() => {
            console.log("Novo Dragão clicado!");
          }}
        />
      </div>
      <SideModal
        isOpen={isSideModalOpen}
        onClose={() => {
          setIsSideModalOpen(false);
          setSelectedDragon(null);
        }}
      >
        {selectedDragon && <DragonDetailsPage dragon={selectedDragon} />}
      </SideModal>
    </>
  );
};

export default Home;
