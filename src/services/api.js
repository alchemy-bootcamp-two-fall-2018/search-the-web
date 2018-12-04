
export default {
    getNews(qTerm = 'apple') {
        return fetch(`https://newsapi.org/v2/everything?q=${encodeURIComponent(qTerm)}&apiKey=eb67c7cd5c2b4143a52313196b6b8f8e`)
            .then(response => response.json());
    }

};