import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './MainPage';
import Greenhouse from './Greenhouse';

function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" index element={<MainPage />} />
        <Route path="/greenhouse" element={<Greenhouse />} />
      </Routes>
    </BrowserRouter>

  
  );

}

export default App;
