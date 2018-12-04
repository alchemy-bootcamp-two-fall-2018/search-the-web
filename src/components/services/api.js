
export default {
    getBooks(searchTerm = '') {
    
        if(searchTerm.startsWith('john steinbeck')) {
            return Promise.reject(new Error('Horrible choice'));
        }
        
        const proxyurl = "https://cors-anywhere.herokuapp.com/";

        return fetch(proxyurl + `https://www.goodreads.com/search.xml?key=EcePBcx3zUsEKTIf20b1dA&q=${encodeURIComponent(searchTerm)}`)
            .then(response => response.json());
    }
};
