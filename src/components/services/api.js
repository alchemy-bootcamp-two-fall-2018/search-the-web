export default {
  getSpecies(searchTerm = '') {
    
    if(searchTerm.startsWith('gun')) {
      return Promise.reject(new Error('no jar jar binks'));
    }
    console.log('searchterm', searchTerm);
    return fetch(`https://swapi.co/api/species?search=${encodeURIComponent(searchTerm)}`) 
      .then(response => response.json()); 
  } 
};