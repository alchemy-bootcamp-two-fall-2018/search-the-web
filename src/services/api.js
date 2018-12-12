export default {
  getNews(searchTerm = '') {

    if(searchTerm.startsWith(undefined)) {
      return Promise.reject(new Error('Invalid'));
    }

    return fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=410a585f82094585916137a1370055d1&q=${encodeURIComponent(searchTerm)}`)

      .then(response => response.json());
  }
};