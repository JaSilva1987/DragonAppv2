// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import DragonDetailsPage from "./pages/DragonDetailsPage/DragonDetailsPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dragons/:dragonId" element={<DragonDetailsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
