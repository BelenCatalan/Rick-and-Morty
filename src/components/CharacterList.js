import React from 'react';
import CharacterCard from './CharacterCard';
import PropTypes from 'prop-types';

function CharacterList(props) {
  if (props.characters.length === 0) {
    return (
      <div>
        <p>No hay ningún personaje que coincida con: {props.charactersFilter}</p>
      </div>
    );
  } else {
    return (
      <section>
        <ul>
          {props.characters.map((character) => {
            return <CharacterCard key={character.id} /*name={character.name} id={character.id}*/ character={character} /*image={character.image} specie={character.species}*/ />;
          })}
        </ul>
      </section>
    );
  }
}
CharacterList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object),
};

export default CharacterList;
