import React from 'react';

function Filters() {
  return (
    <section>
      <form>
        <label className="" htmlFor="name"></label>
        <input className="" type="text" name="character" id="name" placeholder="Character name" /*onChange={handleInputCharacter} */ />
      </form>
    </section>
  );
}

export default Filters;
