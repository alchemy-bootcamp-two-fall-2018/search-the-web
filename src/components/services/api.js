
export default {
  getNews(searchTerm = '') {

    // eslint-disable-next-line
    return fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${APIKEY}&q=${encodeURIComponent(searchTerm)}`)
  
      .then(response => response.json());
  }
};