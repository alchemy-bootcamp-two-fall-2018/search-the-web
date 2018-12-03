<template>
  <section>
    <h2>Search Articles</h2>
    <ArticleSearch />
    <Article />
    <p></p>
  </section>
</template>

<script>
import articleApi from '../../services/api';
import Article from './Article';
import ArticleSearch from './ArticleSearch';

export default {
  data() {
    return {
      articles: null
    };
  },
  components: {
    Article,
    ArticleSearch,
  },
  methods: {
    getArticles() {
      articleApi.getArticles();
    }
  },
  created() {
    this.articles = articleApi.getArticles();
    console.log(this.articles);
  }
};
</script>

<style>

</style>