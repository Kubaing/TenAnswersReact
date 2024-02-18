// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StartGamePage from './pages/StartGamePage';
import SelectModePage from './pages/SelectModePage';
import EasyPage from './pages/EasyPage'; 
import NormalPage from './pages/NormalPage'; 

import './App.css'


const App = () => {
  return (
    <Router>
    <div className="container">
    <Routes>
      <Route path="/" element={<StartGamePage />} />
      <Route path="/select-mode" element={<SelectModePage />} />
      <Route path="/easy" element={<EasyPage />} />
      <Route path="/normal" element={<NormalPage />} />
    </Routes>
    </div>
    </Router>
  );
};

export default App;
