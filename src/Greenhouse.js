import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Greenhouse.css';
import Clock from './clock/Clock';
import NotebookButton from './NotebookButton.js';

function Greenhouse() {
  return (
    <div className="Greenhouse">
      <header className="Greenhouse-header">
        <h1>Welcome to the Greenhouse 🌿</h1>
        <Clock></Clock>
        <HomepageButton />
        <NotebookButton />
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
