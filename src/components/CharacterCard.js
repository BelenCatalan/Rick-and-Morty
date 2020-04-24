import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CharacterCard = (props) => {
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

CharacterCard.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    status: PropTypes.string,
    species: PropTypes.string,
    origin: PropTypes.string,
    image: PropTypes.string,
    episodes: PropTypes.number,
  }),
};

export default CharacterCard;
