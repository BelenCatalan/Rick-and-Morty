import React from 'react';
import nave from '../images/nave.png';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function CharacterDetail(props) {
  return (
    <div className="card__content">
      <div>
        <span className="card__text"> </span>
        <Link to="/">
          <img className="ship__link" src={nave} alt="nave Rick and Morty" />
        </Link>
        <div className="content card__div">
          <header>
            <img className="detail__image" src={props.character.image} alt={props.character.name} />
          </header>
          <section>
            <ul className="detail__ul card__text">
              <li className="card__title">{props.character.name}</li>
              <li className="card__text">Status: {props.character.status}</li>
              <li>Species:{props.character.species}</li>
              <li>Origin: {props.character.origin}</li>
              <li>Episodes:{props.character.episodes}</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
CharacterDetail.propTypes = {
  character: PropTypes.object.isRequired,
};

export default CharacterDetail;
