import React from 'react';
import CharacterCard from './CharacterCard';
import PropTypes from 'prop-types';
import dos from '../images/2.png';

function CharacterList(props) {
  if (props.characters.length === 0) {
    return (
      <div>
        <p className="text__advise">There isn't any character that matches with: {props.charactersFilter}</p>
        <img className="header__name" src={dos} alt="Rick and Morty" />
      </div>
    );
  } else {
    return (
      <section className="section__grid">
        <ul className="wrapper card__ul">
          {props.characters.map((character) => {
            return <CharacterCard key={character.id} character={character} />;
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
