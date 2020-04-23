import React from 'react';

const CharacterCard = (props) => {
  return (
    <li>
      <img className="" src={props.character.image} alt="character_name" />
      <h4>{props.character.name}</h4>
      <p>{props.character.species}</p>
    </li>
  );
};

export default CharacterCard;
