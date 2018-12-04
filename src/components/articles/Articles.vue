<template>
  <section>
    <h2>Enter a subject to get articles:</h2>
    <ArticleSearch 
      :onSearch="handleSearch" 
      />
    <ul>
    <Article v-for="(article, i) in articles"
          :key="i"
          :article="article"
          />
    </ul>
    <!-- <p>{{articles}}</p> -->
  </section>
</template>

<script>
import articleApi from '../../services/api';
import Article from './Article';
import ArticleSearch from './ArticleSearch';

export default {
  data() {
    return {
      articles: null,
      q: decodeURIComponent(this.$route.query.q)
    };
  },
  components: {
    Article,
    ArticleSearch,
  },
  watch: {
    $route(newRoute, oldRoute) {
      const newSearch = newRoute.query.q;
      const oldSearch = oldRoute.query.q;
      if(newSearch === oldSearch) return;
      this.q = decodeURIComponent(newSearch);
      this.searchArticles();
    }
  },
  methods: {
    getArticles() {
      articleApi.getArticles();
    },
    handleSearch(q) {
      this.q = q || '';
      this.searchArticles();
    },
    searchArticles() {
      this.loading = true;
      articleApi.getArticles(this.q)
        .then(response => {
          this.articles = response.articles;
          this.loading = false;
        });
    }
  },
  created() {
    articleApi.getArticles().then(articles => {
      console.log(articles);
      this.articles = articles.articles;
    });
  },
};
</script>

<style>
  .loader {
    position: absolute;
    top: 0; right: 0;
    bottom: 0; left: 0;
    color: white;
    font-weight: bolder;
    background: rgba(0, 0, 0, .6);
}
</style>