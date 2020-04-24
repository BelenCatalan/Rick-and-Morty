import React from 'react';
import { Link } from 'react-router-dom';

const CharacterCard = (props) => {
  console.log(props);
  return (
    <li>
      <Link to={`/character/${props.character.id}`}>
        <img className="" src={props.character.image} alt="character_name" />
        <h4>{props.character.name}</h4>
        <p>{props.character.species}</p>
      </Link>
    </li>
  );
};

export default CharacterCard;
