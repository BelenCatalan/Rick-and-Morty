import React from 'react';

function CharacterDetail() {
  return (
    <div className="">
      <div>
        <div className="content">
          <header>
            <img className="" src="character_image" alt="character_name" />
          </header>
          <section>
            <ul>
              <li>Rick Sanchez</li>
              <li>Status: Alive</li>
              <li>Species:Human</li>
              <li>Origin: Earth</li>
              <li>Episodes:31</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default CharacterDetail;
