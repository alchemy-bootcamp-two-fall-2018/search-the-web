export default {
  getMovies(searchTerm = '') {
    if(searchTerm.startsWith('star')) {
      return Promise.reject(new Error('sorry this sounds like a sci-fi flick, we may refuse to cooperate'));
    }
    return fetch (`http://www.omdbapi.com/?apikey=2ab12766&s=${encodeURIComponent(searchTerm)}`)
    //checkout the network tab for getting info on what is passing through api search
      .then(response => response.json());
  }
  
};