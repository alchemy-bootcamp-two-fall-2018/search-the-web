export default {
  getMovies(searchTerm = 'disney') {
    return fetch(`http://www.omdbapi.com/?s=${encodeURIComponent(searchTerm)}&apikey=5cddd428`)
      .then(response => response.json());
  }
};





// http://www.omdbapi.com/?t=pirates+of+the+caribbean&apikey=5cddd428