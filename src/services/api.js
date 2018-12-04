export default {
  getNews() {
    return fetch ('https://newsapi.org/v2/everything?q=apple&apiKey=39d514bb0f664665a80a58fd2ef2235f')
      .then(response => response.json());
  }
};