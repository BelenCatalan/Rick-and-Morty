import React from 'react';
import CharacterCard from './CharacterCard';

function CharacterList() {
  return (
    <section>
      <ul>
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
      </ul>
    </section>
  );
}

export default CharacterList;
