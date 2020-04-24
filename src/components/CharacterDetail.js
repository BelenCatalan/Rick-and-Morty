import React from 'react';

function CharacterDetail(props) {
  console.log(props);
  return (
    <div className="">
      <div>
        <div className="content">
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

export default CharacterDetail;
