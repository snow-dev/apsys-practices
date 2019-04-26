
import React from 'react';
import logo from './resources/images/logo.svg';
import './resources/styles/App.scss';

function App() {
  return (
    <div className="app-container">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="header-text">
          Welcome Ornithorhynchus anatinus!
        </h1>
      </header>
    </div>
  );
}

export default App;


