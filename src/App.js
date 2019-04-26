/** Import react section **/
import React from 'react';

/** Import resources section **/
import logo from './resources/images/logo.svg';
import './resources/styles/_index.css';

/** Import component section **/
import HeaderContainer from './components/shared/Header/HeaderContainer';

function App() {
  return (
    <div className="app-container">
      <header className="App-header">
        <HeaderContainer/>
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="header-text">
          Welcome Ornithorhynchus anatinus!
        </h1>
      </header>
    </div>
  );
}

export default App;


