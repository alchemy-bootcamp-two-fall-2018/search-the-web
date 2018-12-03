export default {
    getArticles() {
      return fetch('https://newsapi.org/v2/top-headlines?apiKey=5087f35656d64707a373a3db0cd7ca5f&language=en')
        .then(response => {
          console.log('response', response);
          response.json();
        });
    }
  };