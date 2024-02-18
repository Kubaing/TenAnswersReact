// src/components/SelectMode.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SelectModePage.css'
import { Link } from 'react-router-dom';

const SelectMode = () => {
  const navigate = useNavigate();

  const handleModeClick = (mode) => {
    navigate(`/${mode}`); // ให้ไปที่ '/game/easy' หรือ '/game/normal'
  };

  return (
    <div>
      <h2 className="BoxS">เลือกโหมดที่ต้องการเล่น</h2>
      <button className="buttone" onClick={() => handleModeClick('Easy')}>โหมดง่าย</button>
      <p> </p>
      <button className="buttonn" onClick={() => handleModeClick('normal')}>โหมดปกติ</button>
      <br />
      <Link to="/">
       <img src="./image/home.png" align="right" alt="Home" />
      </Link>
    </div>
    
  );
};

export default SelectMode;
