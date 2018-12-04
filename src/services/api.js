export default {
    getNews() {
        return fetch('https://newsapi.org/v2/everything?q=bush&apiKey=9c1283752a154aa9a9d72d01b0d8a83a')
            .then(response => response.json());
    } 
};

// eslint-disable-next-line
    // const apiKey = process.env.VUE_APP_API_KEY;

//     const url = 'https://newsapi.org/v2/everything?q=' + 
// encodeURIComponent(story) +

// '&apiKey' + apiKey;

// const url = 'https://newsapi.org/v2/everything?q=bush&apiKey=9c1283752a154aa9a9d72d01b0d8a83a';

// return fetch(url)
    
    