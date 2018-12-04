export default {
  getNews(searchTerm = '', page = 1) {
    if(searchTerm.startsWith('foobar')) {
      return Promise.reject(new Error('Intruder Alert'));
    }

    return fetch(`https://newsapi.org/v2/everything?q=${encodeURIComponent(searchTerm)}&apiKey=fc1e1819ef4841e98ec5acff46998463&page=${page}`)
      .then(response => response.json());
  }
};