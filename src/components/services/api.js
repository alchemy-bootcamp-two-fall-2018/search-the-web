
export default {
    getArticles(searchTerm = '') {
    
        if(searchTerm.startsWith('FOX')) {
            return Promise.reject(new Error('Horrible choice'));
        }
        
        // const proxyurl = "https://cors-anywhere.herokuapp.com/";
        var url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(searchTerm)}&apiKey=5019687ffb5144429aec147e3114f01a`;
        var req = new Request(url);
        return fetch(req)
            .then(response => response.json());
    }
};