/** Import react section **/
import React from 'react';

/** Import resources section **/
import logo from './resources/images/logo.svg';
import './resources/styles/_index.css';

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


