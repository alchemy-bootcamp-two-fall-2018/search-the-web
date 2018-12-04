<template>
  <section class="articles">
    <h2>Articles</h2>

    <ArticleSearch :onSearch="handleSearch" :search="search"/>

    <Loader :loading="loading"/>

    <p v-if="search" >
      Searching for &quot;{{ search }}&quot;
    </p>

    <pre v-show="error" class="error">
      {{error}}
    </pre>

    <div class="search-container">
      <ul v-if="articles">
        <Article v-for="(article, i) in articles"
            :key="i"
            :article="article"
        />
      </ul>
    </div>

  </section>
</template>

<script>
import api from '../../services/api.js';
import Article from './Article';
import ArticleSearch from './ArticleSearch';
import Loader from './Loader';

export default {
  data() {
    const search = this.$route.query.search;
    return {
      articles: null,
      loading: false,
      error: null,
      search: decodeURI(this.$route.query.search),
      page: decodeURIComponent(search),
      total: 0,
      perPage: 10
    };
  },
  components: {
    Article,
    ArticleSearch,
    Loader
  },
  created() {
    this.searchArticles();
  },
  // computed: {
  //   totalPages() {
  //     return Math.ceil(this.total / this.perPage);
  //   }
  // },
  watch: {
    $route(newRoute, oldRoute) {
      const newSearch = newRoute.query.search;
      const oldSearch = oldRoute.query.search;
      // let newPage = newRoute.query.page;
      // const oldPage = oldRoute.query.page;
      // if(newSearch === oldSearch && newPage === oldPage) return;
      if(newSearch === oldSearch) return;

      this.handleSearch(decodeURIComponent(newSearch));
    }
  },
   
  methods: {
    handleSearch(search) {
      this.search = search || '';
      this.searchArticles();
    },
    // handlePage(increment) {
    //   this.page += increment;
    //   this.recordPage();
    // },
    // recordPage() {
    //   this.$router.push({
    //     query: {
    //       search: encodeURIComponent(this.search),
    //       // page: this.page
    //     }
      
    searchArticles() {
      this.loading = true;
      this.error = null;

      api.getArticles(this.search)
        .then(response => {
          this.articles = response.articles;
          // this.total = response.count;
          this.loading = false;
        })
        .catch(err => {
          this.error = err.message;
          this.articles = null;
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
.loader {
  position: absolute;
  top: 0; right: 0;
  bottom: 0; left: 0;
  color: white;
  font-weight: bolder;
  background: rgba(0, 0, 0, .6);
}
</style>
