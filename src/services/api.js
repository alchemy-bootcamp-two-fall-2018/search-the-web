
export default {
  getArticles() {
    // fetch: url, [options]
    return fetch('https://newsapi.org/v2/everything?q=Apple&apiKey=38c2a40766ca42ad87826fdf2fa29061')
      .then(response => {
        console.log('fetch complete', response);
        return response.json();
      });
  }
};