import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Pomodoro.css';
import Clock from './clock/Clock';

function Pomodoro() {
  return (
    <div className="Pomodoro">
      <header className="Pomodoro-header">
        <h1>Start your Pomodoro here!⏰ </h1>
        <Clock></Clock>
        <HomepageButton />
      </header>
    </div>
  );
}

function HomepageButton() {
    const navigate = useNavigate();

      return (
        <button onClick={() => {
            navigate('/');
        }}>
            go back to home page
        </button>
      );
}

export default Pomodoro;
