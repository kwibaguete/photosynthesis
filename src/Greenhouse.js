import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Greenhouse.css';

function Greenhouse() {
  return (
    <div className="Greenhouse">
      <header className="Greenhouse-header">
        <h1>Welcome to the Greenhouse 🌿</h1>
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
