<template>
  <section class="species">
    <h2> Species </h2>
    
    <SpeciesSearch :onSearch="handleSearch" :search="search"/>

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

export default {
  data() {
    return {
      species: null,
      search: decodeURIComponent(this.$route.query.search),
    };
  }, 
  components: {
    Specie, 
    SpeciesSearch
  }, 
  methods: {
    handleSearch(search) {
      this.search = search || '';
      this.searchSpecies();
    },
    searchSpecies() {
      api.getSpecies(this.search)
        .then(response => {
          this.species = response.results;
        });
    }
  }
}; 
</script>

<style>

</style>