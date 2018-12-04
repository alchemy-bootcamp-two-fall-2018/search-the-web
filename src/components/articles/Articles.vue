<template>
    <section class="articles">
        <h2>Articles</h2>
        <p>{{articles}}</p>
    <div class="search-container">
    <ul v-if="articles">
    <Articles v-for="(articles, i) in article"
        :key="i"
        :articles="articles"
    />
    </ul>

    </section>   
</template>

<script>
import ArticleSearch from './ArticleSearch';
import Article from './Article';
import articlesApi from '../../articlesApi.js';
// import Loader from './Loader';

export default {
  data() {
    return {
      articles: null,
      search: decodeURIComponent(this.$route.query.search)
    };
  },
  components: {
    Article,
    ArticleSearch
  },
  created() {
    this.searchArticles();
    this.articles = articleApi.getArticles();
  },
  methods: {
    getArticles() {
      articleApi.getArticles();

    handleSearch(search) ;
        this.search = search || '';
        this.searchArticles();
    }
},
// searchArticles() {
}
;
</script>

<style>
/* .loader {
  position: absolute;
  top: 0; right: 0;
  bottom: 0; left: 0;
  color: white;
  font-weight: bolder;
  background: rgba(0, 0, 0, .6);
} */
</style>