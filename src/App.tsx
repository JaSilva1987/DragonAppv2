// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import DragonFormPage from "./pages/DragonFormPage/DragonFormPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-dragon" element={<DragonFormPage />} />
      </Routes>
    </Router>
  );
};

export default App;
