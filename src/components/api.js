export default {
  getNews(searchTerm = '', page = 1) {
    return fetch('https://newsapi.org/v2/everything?search=${encodeURIComponent(searchTerm)}&apiKey=fc1e1819ef4841e98ec5acff46998463');
      .then(response => response.json());

  }
};