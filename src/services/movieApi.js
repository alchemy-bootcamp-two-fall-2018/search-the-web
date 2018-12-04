export default {
  getMovies(searchTerm = '') {

    if(searchTerm === 'walk to remember') return Promise.reject(new Error('A Walk to Remember is too depressing to be watched by anyone'));
    
    return fetch(`http://www.omdbapi.com/?s=${encodeURIComponent(searchTerm)}&apikey=5cddd428`)
      .then(response => response.json());
  }
};



