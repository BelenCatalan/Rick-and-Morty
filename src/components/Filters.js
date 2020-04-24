import React from 'react';
import PropTypes from 'prop-types';

function Filters(props) {
  const handleInputCharacter = (ev) => {
    ev.preventDefault();
    console.log(ev.target.value);
    props.handleFilterText({
      value: ev.target.value,
      name: ev.target.name,
    });
  };
  const handlerSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section>
      <form onSubmit={handlerSubmit}>
        <label className="" htmlFor="name"></label>
        <input className="" type="text" name="character" id="name" placeholder="Character name" onChange={handleInputCharacter} value={props.charactersFilter} />
      </form>
    </section>
  );
}

Filters.propTypes = {
  charactersFilter: PropTypes.string.isRequired,
  handleFilterText: PropTypes.func.isRequired,
};

export default Filters;
