export default {
    getData(searchTerm = '') {
        
        // return fetch(`https://newsapi.org/v2/everything?search=${encodeURIComponent(searchTerm)}`)
        return fetch('https://newsapi.org/v2/everything?q=bitcoin&from=2018-11-04&sortBy=publishedAt&apiKey=382852b6e4974fde8afeff04975c74b1')
            .then(response => response.json());
    }
};


//this worked in browser 4:30 pm
// https://newsapi.org/v2/everything?q=bitcoin&from=2018-11-04&sortBy=publishedAt&apiKey=382852b6e4974fde8afeff04975c74b1