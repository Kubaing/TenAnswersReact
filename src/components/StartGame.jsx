// src/components/StartGame.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './StartGame.css'

const StartGame = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate('/select-mode'); // นำทางไปยังหน้า Select Mode
  };

  return (
    <div>
      <h2>ยินดีต้อนรับ <br /> ขอให้สนุก!</h2>
      <button className="button" onClick={handleStartClick}>เริ่มเกมส์</button>
      <h6>Made By Apiwat&Hannarong</h6>
    </div>
    
  );
};

export default StartGame;
