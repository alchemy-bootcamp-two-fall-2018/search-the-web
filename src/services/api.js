export default {
  getKpm(year = '2013-14', page = 1) {

    if(year === '2017-18') {
      return Promise.reject(new Error(`${year} data does not exist!`));
    }

    return fetch(`https://service.civicpdx.org/budget/kpm/?page=${page}&fiscal_year=${encodeURIComponent(year)}`)
      .then(response => response.json());
  }
};