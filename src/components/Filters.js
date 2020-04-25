import React from 'react';
import PropTypes from 'prop-types';

function Filters(props) {
  const handleInputCharacter = (ev) => {
    props.handleFilterText({
      value: ev.target.value,
      name: ev.target.name,
    });
  };
  const handlerSubmit = (e) => e.preventDefault();

  return (
    <section className="input__style">
      <form onSubmit={handlerSubmit} className="input__style">
        <label className="input__style" htmlFor="name"></label>
        <input className="input__label" type="text" name="character" id="name" placeholder="Character name" onChange={handleInputCharacter} value={props.charactersFilter} />
      </form>
    </section>
  );
}

Filters.propTypes = {
  charactersFilter: PropTypes.string.isRequired,
  handleFilterText: PropTypes.func.isRequired,
};

export default Filters;
