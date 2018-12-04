export default {
  getMovies(searchTerm = '') {
    return fetch (`http://www.omdbapi.com/?apikey=2ab12766&s=${encodeURIComponent(searchTerm)}`)
      .then(response => response.json());
  }
};