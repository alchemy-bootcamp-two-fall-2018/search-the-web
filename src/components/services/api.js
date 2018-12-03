export default {
  getKpm(term = '', page = 1) {
    return fetch(`https://service.civicpdx.org/budget/kpm/?page=${page}&fiscal_year=${encodeURIComponent(term)}`)
      .then(response => response.json());
  }
};