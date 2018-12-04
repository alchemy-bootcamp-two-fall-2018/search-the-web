
export default {
    getArticles() {
        return fetch('https://newsapi.org/v2/everything?q=apple&apiKey=eb67c7cd5c2b4143a52313196b6b8f8e')
            .then(response => response.json());
    }
};