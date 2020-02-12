import React from 'react';
import './App.css';

// Components
import CatImgBtn from './components/CatImgBtn';
import CatImg from './components/CatImg';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h2>Random Cat Generator</h2>
      </header>
      <CatImgBtn />
      <CatImg />
    </div>
  );
}

export default App;
