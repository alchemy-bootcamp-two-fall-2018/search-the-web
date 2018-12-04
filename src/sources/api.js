export default {
    getNews() {
        return fetch('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=26220a12c46842e4a8dfce61c8c2ccd4')
            .then(response => response.json());
    }

};

