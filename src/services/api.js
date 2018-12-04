export default {
  getArticles(searchTerm = '') {
    return fetch(`https://newsapi.org/v2/everything?apiKey=5087f35656d64707a373a3db0cd7ca5f&language=en&pageSize=80&q=${encodeURIComponent(searchTerm)}`)
      .then(response => response.json());
  }
};