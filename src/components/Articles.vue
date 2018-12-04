<template>
    <section class="articles">
        <h2>Articles</h2>
        <!-- <button @click="searchArticles()">Get articles</button>
        <ArticlesSearch :onSearch="handleSearch" :search="search"/>
        <Loader :loading="loading"/>

        <pre v-show="error" class="error">
            {{ error }}
        </pre>

        <p v-if="search">Searching for &quot;{{ search }}&quot;</p> -->
        <div class="search-container">
            <ul v-if="articles">
                <Article v-for="(article, i) in articles"
                    :key="i"
                    :article="person"
                />
            </ul>
        </div>
    </section>
</template>

<script>
import Article from './Article';
//import ArticleSearch from './ArticleSearch';
//import Loader from './Loader';
import api from '../services/api.js';

export default {
  data() {
    return {
      name: '',
      title: '',
      author: '',
      url: '',
      loading: false,
      search: '',
      total: 0
    };
  },
  components: {
    Article,
    //ArticleSearch,
    //Loader
  },
  created() {
    api.getArticles();
    //   .then(response => {
    //     this.article = articles;
    //   });
  },
  watch: {
    //route
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
