export default {
  getArticles() {
    return fetch('https://newsapi.org/v2/everything?q=trump&apiKey=f133179e6a6f4102929e1fda860a8937')
      
      //promise
      .then(response => { response.json();
      });
  }
};
//reworking while rewatching lecture: left off @30:59