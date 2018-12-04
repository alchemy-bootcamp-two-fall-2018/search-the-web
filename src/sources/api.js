export default {
    getNews(qTerm = 'apple') {
        return fetch(`https://newsapi.org/v2/everything?q=${encodeURIComponent(qTerm)}&apiKey=26220a12c46842e4a8dfce61c8c2ccd4`)
            .then(response => response.json());
    }

};

