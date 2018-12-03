

export default {
  // default parameter, will be empty string if nothing provided
  getArticles(searchTerm = '') {
    
  
  
    // return promise-chain so caller gets final output
  
    // fetch takes: url, [options]
    return fetch('https://newsapi.org/v2/top-headlines?apiKey=094dd0a3cf5e4611aabcb45dee3c3346&language=en')
    // when the response from the server is received,
    // this callback will be invoked:
      .then(response => response.json());
    // now the second promise returned from this "then"
    // is available to the caller of getPeople
  
        
  
  }
};