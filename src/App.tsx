import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import DragonDetailsPage from "./pages/DragonDetailsPage/DragonDetailsPage";
import DragonFormPage from "./pages/DragonFormPage/DragonFormPage";
import { Dragon } from "./pages/Home/interfaces";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/new-dragon"
          element={
            <DragonFormPage
              updateDragonList={function (newDragon: Dragon): void {
                throw new Error("Function not implemented.");
              }}
            />
          }
        />
        <Route path="/dragons/:dragonId" element={<DragonDetailsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
