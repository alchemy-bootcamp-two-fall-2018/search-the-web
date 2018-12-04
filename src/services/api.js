export default {
    getNews(searchTerm = '') {
        // eslint-disable-next-line
      const apiKey = process.env.VUE_APP_API_KEY;
        // return fetch('https://newsapi.org/v2/everything?q=bush&apiKey=9c1283752a154aa9a9d72d01b0d8a83a')
        return fetch(`https://newsapi.org/v2/everything?&apiKey=${apikey}&q=${encodeURIComponent(searchTerm)}`)
            .then(response => response.json());
    } 
};



//     const url = 'https://newsapi.org/v2/everything?q=' + 
// encodeURIComponent(story) +

// '&apiKey' + apiKey;

// const url = 'https://newsapi.org/v2/everything?q=bush&apiKey=9c1283752a154aa9a9d72d01b0d8a83a';

// return fetch(url)
    
    