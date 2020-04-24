import React from 'react';
import nave from '../images/nave.png';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function CharacterDetail(props) {
  return (
    <div className="">
      <div>
        <div className="content">
          <Link to="/">
            <img className="ship__link" src={nave} alt="nave Rick and Morty" />
          </Link>
          <header>
            <img className="" src={props.character.image} alt="character_name" />
          </header>
          <section>
            <ul>
              <li>{props.character.name}</li>
              <li>Status: {props.character.status}</li>
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
