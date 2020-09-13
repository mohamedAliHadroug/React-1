import React from 'react';
import './App.css';
import Menu from './componants/Menu';
import Cards from './componants/Cards';
import Formulaire from './componants/Formulaire';

function App() {
  return (
    <div className="App">
     <Menu />
     <div style={{margin:"200px"}}>
     <Cards  />
     </div>
    <Formulaire />
    </div>
  );
}

export default App;
