export default {
  getArticles(searchTerm = '') {
    return fetch(`https://newsapi.org/v2/everything?q=${encodeURIComponent(searchTerm)}&apiKey=f133179e6a6f4102929e1fda860a8937`)
      .then(response => response.json());
  }
};