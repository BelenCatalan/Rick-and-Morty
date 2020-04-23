import React from 'react';
import CharacterCard from './CharacterCard';

function CharacterList(props) {
  console.log(props);

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
            return <CharacterCard key={character.id} name={character.name} id={character.id} character={character} image={character.image} specie={character.species} />;
          })}
        </ul>
      </section>
    );
  }
}

export default CharacterList;
