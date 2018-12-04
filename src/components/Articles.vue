<template>
    <section class="articles">
        <h2>Articles</h2>
        <button @click="searchArticles()">Get articles</button>
        <!--<ArticlesSearch :onSearch="handleSearch" :search="search"/>-->
    </section>

</template>


<script>
import api from '../services/api.js';

export default {
  data() {

    return {

    };
  },

  methods: {
    searchArticles() {
      api.getArticles();
    },
    
    handleSearch(search) {
      this.search = search || '';
      this.page = 1;
    }
  }

};
</script>

<style>

</style>
