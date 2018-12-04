export default {
  getRecords(searchTerm = '') {
    return fetch ('http://api.discogs.com/users/pickuppatterns/collection/folders/0/search=${encodeURIComponent(searchTerm)}&page=${page}')
      .then(response => response.json());
  }
};