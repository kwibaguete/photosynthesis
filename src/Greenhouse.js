import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Greenhouse.css';
import Clock from './clock/Clock';

function Greenhouse() {
  return (
    <div className="Greenhouse">
      <header className="Greenhouse-header">
        <h1>Welcome to the Greenhouse 🌿</h1>
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

export default Greenhouse;
