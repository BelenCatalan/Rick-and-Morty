import React, { useEffect, useState } from 'react';
import '../stylesheets/App.css';
import logo from '../images/Rick_and_Morty.png';
import CharacterList from './CharacterList';
import Filters from './Filters';
import CharacterDetails from './CharacterDetail';
import getDataApi from '../services/getDataApi';

function App() {
  const [characters, setCharacters] = useState([]);
  const [charactersFilter, setCharactersFilter] = useState('');

  useEffect(() => {
    getDataApi().then((data) => {
      setCharacters(data);
    });
  }, []);

  const handleFilterText = (data) => {
    console.log(data);
    console.log('estoy');
    setCharactersFilter(data.value);
  };
  console.log(characters);

  characters.sort(function (a, b) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });

  const filteredCharacters = characters.filter((character) => {
    console.log(character.name);
    return character.name.toLowerCase().includes(charactersFilter.toLowerCase());
  });

  // const renderFilterCharacters = () => {
  //   const filteredCharacters = characters.filter((character) => {
  //     if (character.name.toLowerCase().includes(charactersFilter.toLowerCase())) {
  //       return <CharacterList characters={filteredCharacters} />;
  //     } else {
  //       return <p>No se encuentra</p>;
  //     }
  //   });
  // };

  // console.log(filteredCharacters);
  return (
    <div>
      <header>
        <img className="" src={logo} alt="Rick and Morty" />
      </header>
      <Filters handleFilterText={handleFilterText} charactersFilter={charactersFilter} />
      {/* {renderFilterCharacters()} */}
      <CharacterList characters={filteredCharacters} charactersFilter={charactersFilter} />
      <CharacterDetails />
    </div>
  );
}

export default App;
