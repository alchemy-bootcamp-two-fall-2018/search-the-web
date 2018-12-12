
export default {
    getArticles(qTerm = '') {
        return fetch(`https://newsapi.org/v2/everything?q=${encodeURIComponent(qTerm)}&apiKey=eb67c7cd5c2b4143a52313196b6b8f8e`)
            .then(response => { 
                console.log('SOMEHTIGN', response);
                return response.json();
            
            });
    }

};

// Key=eb67c7cd5c2b4143a52313196b6b8f8e