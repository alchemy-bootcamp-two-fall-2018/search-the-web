export default {
  getArticles() {
    return fetch('https://newsapi.org/v2/everything?apiKey=094dd0a3cf5e4611aabcb45dee3c3346&pageSize=10&q=code')
      .then(response => response.json());
  }
};