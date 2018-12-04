

export default {

  getArticle(searchTerm = '', page = 1) {

    if(searchTerm.startsWith('jar')) {
      return Promise.reject(new Error('meesa think that bad search'));
    }

    return fetch('https://newsapi.org/v2/everything?q=Apple&from=2018-12-03&sortBy=popularity&apiKey=2ca2954860044284aefd2b4c3dd9d2d8')

      .then(response => response.json());
  }

};