import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CharacterCard = (props) => {
  return (
    <li className="card__container">
      <Link className="link__decoration" to={`/character/${props.character.id}`}>
        <img className="card__image" src={props.character.image} alt="character_name" />
        <h4 className="card__text--color card__h4">{props.character.name}</h4>
        <p className="card__text--color card__p">{props.character.species}</p>
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
