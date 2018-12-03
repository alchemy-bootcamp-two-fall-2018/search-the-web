export default {
  getArticles() {
    return fetch('https://newsapi.org/v2/everything?apiKey=5087f35656d64707a373a3db0cd7ca5f&language=en&q=code&pageSize=20')
      .then(response => response.json());
  }
};