import React, { useEffect, useState } from 'react';
import '../stylesheets/App.css';
import logo from '../images/Rick_and_Morty.png';
import dos from '../images/2.png';
import CharacterList from './CharacterList';
import Filters from './Filters';
import CharacterDetails from './CharacterDetail';
import getDataApi from '../services/getDataApi';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

function App() {
  const [characters, setCharacters] = useState([]);
  const [charactersFilter, setCharactersFilter] = useState('');

  useEffect(() => {
    getDataApi().then((data) => {
      setCharacters(data);
    });
  }, []);

  const handleFilterText = (data) => setCharactersFilter(data.value);

  characters.sort(function (a, b) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });

  const filteredCharacters = characters.filter((character) => {
    return character.name.toLowerCase().includes(charactersFilter.toLowerCase());
  });

  const renderCharacterDetails = (props) => {
    const characterId = parseInt(props.match.params.characterId);
    const foundCharacter = characters.find((character) => {
      return character.id === characterId;
    });

    if (foundCharacter !== undefined) {
      return <CharacterDetails character={foundCharacter} />;
    } else {
      return (
        <div>
          <p className="text__advise">The character you are looking for doesn't exist</p>
          <img className="header__name" src={dos} alt="Rick and Morty" />
        </div>
      );
    }
  };

  return (
    <div>
      <header>
        <img className="header__name" src={logo} alt="Rick and Morty" />
      </header>

      <Switch>
        <Route exact path="/">
          <Filters handleFilterText={handleFilterText} charactersFilter={charactersFilter} />
          <CharacterList characters={filteredCharacters} charactersFilter={charactersFilter} />
        </Route>
        <Route path="/character/:characterId" render={renderCharacterDetails} />
      </Switch>
    </div>
  );
}

App.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      characterId: PropTypes.string.isRequired,
    }),
  }),
};

export default App;
