<template>
  <section class="species">
    <h2> Species </h2>
    
    <SpeciesSearch :onSearch="handleSearch" :search="search"/>

    <Loader :loading="loading"/>

    <pre v-show="error" class="error">
      {{error}}
    </pre>

    <div class="search-container">
      <ul v-if="species">
        <Specie v-for="(specie, i) in species"
        :key="i"
        :specie="specie"
        />
    
    </ul>
    
    </div>

    </section>

</template>

<script>

import api from '../services/api.js'; 
import SpeciesSearch from './SpeciesSearch'; 
import Specie from './Specie'; 
import Loader from './Loader'; 

export default {
  
  data() {
    const search = this.$route.query.search;
    return {
      error: null,
      species: null,
      loading: false,
      search: search ? decodeURIComponent(search) : '',
    };
  }, 
  components: {
    Specie, 
    Loader,
    SpeciesSearch
  }, 
  created() {
    this.searchSpecies(); 
    
  },
  watch: {
    $route(newRoute, oldRoute) {
      const newSearch = newRoute.query.search;
      const oldSearch = oldRoute.query.search;
      if(newSearch === oldSearch) return;
      this.search = decodeURIComponent(newSearch);
      this.searchSpecies();
    }
  },
  methods: {
    handleSearch(search) {
      this.search = search || '';
      this.searchSpecies();
    },
    searchSpecies() {
      this.loading = true;
      this.error = null;
      api.getSpecies(this.search)
        .then(response => {
          this.species = response.results;
          this.loading = false;
        })
        .catch(err => {
          this.error = err.message;
          this.species = null;
          this.loading = false;
        });
    }
  }
}; 
</script>

<style>

.error {
  color: red;
}

</style>