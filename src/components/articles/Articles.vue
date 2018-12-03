<template>
    <div>
        <h2>Articles</h2>
        <p>{{articles}}</p>
    </div>
</template>

<script>
import ArticleSearch from './ArticleSearch';
import Article from './Article';
import articleApi from '../../Articleapi.js';
export default {
  data() {
    return {
      articles: null
    };
  },
  components: {
    Article,
    ArticleSearch
  },
  methods: {
    getArticles() {
      articleApi.getArticles();
    }
  },
  created() {
    this.articles = articleApi.getArticles();
  },
};
</script>

<style>
</style>