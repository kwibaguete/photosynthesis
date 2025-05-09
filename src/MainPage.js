import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import Clock from './clock/Clock';

function MainPage() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Home page!</h1>
        <Clock></Clock>
        <GreenhouseButton />
      </header>
    </div>
  );
}



function GreenhouseButton() {
  const navigate = useNavigate();

  return (
    <button onClick={() => {
        console.log("navigating to greenhouse...");
        navigate('/greenhouse');
    }}>
      greenhouse!
    </button>
  );
}

export default MainPage;
