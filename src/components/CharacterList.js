import React from 'react';
import CharacterCard from './CharacterCard';

function CharacterList(props) {
  const characterItems = props.characters.map((character) => {
    return <CharacterCard key={character.id} /*character={character}*/ name={character.name} id={character.id} character={character} image={character.image} specie={character.species} />;
  });

  return (
    <section>
      <ul>{characterItems}</ul>
    </section>
  );
}

export default CharacterList;
