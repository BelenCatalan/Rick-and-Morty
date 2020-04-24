import React, { useEffect, useState } from 'react';
import '../stylesheets/App.css';
import logo from '../images/Rick_and_Morty.png';
import CharacterList from './CharacterList';
import Filters from './Filters';
import CharacterDetails from './CharacterDetail';
import getDataApi from '../services/getDataApi';
import { Route, Switch } from 'react-router-dom';

function App() {
  const [characters, setCharacters] = useState([]);
  const [charactersFilter, setCharactersFilter] = useState('');

  useEffect(() => {
    getDataApi().then((data) => {
      setCharacters(data);
    });
  }, []);

  const handleFilterText = (data) => {
    setCharactersFilter(data.value);
  };

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
  const renderCharacterDetails = (props) => {
    console.log(props.match.params.characterId);
    const characterId = parseInt(props.match.params.characterId);
    console.log(characterId);
    const foundCharacter = characters.find((character) => {
      return character.id === characterId;
    });
    console.log(foundCharacter);
    if (foundCharacter !== undefined) {
      return <CharacterDetails character={foundCharacter} /*name={foundCharacter.id}*/ />;
    }
  };

  return (
    <div>
      <header>
        <img className="" src={logo} alt="Rick and Morty" />
      </header>

      <Switch>
        {/* <Route path="/" render={() => <Filters handleFilterText={handleFilterText} charactersFilter={charactersFilter} />} /> */}
        <Route exact path="/">
          <Filters handleFilterText={handleFilterText} charactersFilter={charactersFilter} />
          <CharacterList characters={filteredCharacters} charactersFilter={charactersFilter} />
        </Route>
        <Route path="/character/:characterId" render={renderCharacterDetails} />
        {/* <CharacterDetails /> */}
      </Switch>
    </div>
  );
}

export default App;
