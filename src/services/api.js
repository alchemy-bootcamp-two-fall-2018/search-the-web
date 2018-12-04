export default {
  getKpm(year = '2013-14', page = 1) {
    return fetch(`https://service.civicpdx.org/budget/kpm/?page=${page}&fiscal_year=${encodeURIComponent(year)}`)
      .then(response => response.json());
  }
};