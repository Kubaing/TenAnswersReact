import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Normal.css'


const Game = ({ mode: propMode }) => {
  const [solution, setSolution] = useState(0);
  const [userGuess, setUserGuess] = useState('');
  const [resultMessage, setResultMessage] = useState('');
  const [maxNumber, setMaxNumber] = useState(100);
  const [remainingAttempts, setRemainingAttempts] = useState(10);

  useEffect(() => {
    setMaxNumber(propMode === 'normal' ? 100 : 100);
    genSolution();
    setRemainingAttempts(10); // เมื่อโหมดเปลี่ยนให้รีเซ็ตจำนวนรอบที่เหลือ
  }, [propMode]);

  const genSolution = () => {
    const newSolution = Math.floor(Math.random() * (maxNumber + 1));
    console.log(newSolution);
    setSolution(newSolution);
  };

  const validateInput = () => {
    setUserGuess((prevGuess) => prevGuess.replace(/\D/g, ''));
  };

  const easyClicked = () => {
    if (userGuess.trim() === '') {
      alert('กรุณาใส่ตัวเลขที่ต้องการสุ่ม');
      return;
    }
  
    const guessedNumber = parseInt(userGuess);
    const targetNumber = solution;
  
    if (guessedNumber === targetNumber) {
      setResultMessage('ยินดีด้วย! คุณชนะ!');
      handleGameEnd(guessedNumber, targetNumber);
    } else {
      setResultMessage(
        <span className="redText">
          {`เลขที่สุ่ม ${
            guessedNumber < targetNumber ? ' : มากกว่า' :' : น้อยกว่า'
          } ${guessedNumber}`}
        </span>
      );
      setRemainingAttempts((prevAttempts) => prevAttempts - 1);
  
      if (remainingAttempts === 1) {
        setResultMessage('คุณแพ้! ลองใหม่อีกครั้ง!');
        handleGameEnd(guessedNumber, targetNumber);
      }
    }
  };
  
  
  const handleGameEnd = (guessedNumber, targetNumber) => {
    let message = '';
  
    if (guessedNumber === targetNumber) {
      message = 'ยินดีด้วย! คุณชนะ!';
    } else {
      message = 'คุณแพ้! ลองใหม่อีกครั้ง!';
    }
  
    const playAgain = window.confirm(`${message} คุณต้องการที่จะเล่นอีกครั้งใช่หรือไม่?`);
  
    if (playAgain) {
      setRemainingAttempts(10);
      setResultMessage('');
      setUserGuess('');
      genSolution();
    }
  };
  
  

  return (
    <div className="cont">
      <h1 className="BoxS">เกมส์สิบคำตอบ</h1>
      <h2 className="ModeN">โหมด ปกติ</h2>
      <p>จำนวนรอบที่เหลือ: {remainingAttempts}</p>
      <p id="resultMessage">{resultMessage}</p>
      <p htmlFor="userGuess">กรุณาใส่ตัวเลขที่ต้องการสุ่ม(0-99)<br /></p>
      <input
        type="text"
        id="userGuess"
        value={userGuess}
        onChange={(e) => setUserGuess(e.target.value)}
        onBlur={validateInput}
      /><br />
      <button type="submit" onClick={easyClicked}>Submit</button>
      {resultMessage && (
      <button onClick={handleGameEnd}>Reset</button>
      )}
      <div></div>
      <Link to="/">
      <img src="./image/home.png" align="right" alt="Home" />
      </Link>
    </div>
  );
};

export default Game;
