/** Import react section **/
import React from 'react';

/** Import resources section **/
import './resources/styles/_index.css';

/** Import component section **/
import HeaderContainer from './components/shared/Header/HeaderContainer';
import Footer from './components/shared/Footer/Footer';

function App() {
  return (
    <div className="app-container">
      <HeaderContainer/>
      {/*<WorkspaceComponent/>*/}
      <Footer/>
    </div>
  );
}

export default App;


