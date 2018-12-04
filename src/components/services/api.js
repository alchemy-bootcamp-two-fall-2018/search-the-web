export default {
  getSpecies(searchTerm = '') { 
    console.log('searchterm', searchTerm);
    return fetch(`https://swapi.co/api/species?search=${encodeURIComponent(searchTerm)}`) 
      .then(response => response.json()); 
  } 
};