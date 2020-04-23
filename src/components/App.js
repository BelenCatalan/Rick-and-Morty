import React from 'react';
import '../stylesheets/App.css';
import logo from '../images/Rick_and_Morty.png';
import CharacterList from './CharacterList';
import Filters from './Filters';
import CharacterDetails from './CharacterDetail';
function App() {
  return (
    <div>
      <header>
        <img className="" src={logo} alt="Rick and Morty" />
      </header>
      <Filters />
      <CharacterList />
      <CharacterDetails />
    </div>
  );
}

export default App;
