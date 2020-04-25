const getDataApi = () => {
  return fetch('https://rickandmortyapi.com/api/character/')
    .then((response) => response.json())
    .then((data) => {
      return data.results.map((character) => {
        return {
          id: character.id,
          name: character.name,
          status: character.status,
          species: character.species,
          origin: character.origin.name,
          image: character.image,
          episodes: character.episode.length,
        };
      });
    });
};
export default getDataApi;

// en caso de que no la API no esté habilitada o no funcione obtener los datos de aqui:https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json
