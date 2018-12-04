export default {
  getMovies(searchTerm = '') {
    return fetch (`http://www.omdbapi.com/?apikey=2ab12766&s=${encodeURIComponent(searchTerm)}`)
    //checkout the network tab for getting info on what is passing through api search
      .then(response => response.json());
  }
};