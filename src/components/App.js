import React, { useEffect, useState } from 'react';
import '../stylesheets/App.css';
import logo from '../images/Rick_and_Morty.png';
import CharacterList from './CharacterList';
import Filters from './Filters';
import CharacterDetails from './CharacterDetail';
import getDataApi from '../services/getDataApi';

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getDataApi().then((data) => {
      setCharacters(data);
    });
  }, []);

  return (
    <div>
      <header>
        <img className="" src={logo} alt="Rick and Morty" />
      </header>
      <Filters />
      <CharacterList characters={characters} />
      <CharacterDetails />
    </div>
  );
}

export default App;
