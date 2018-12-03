<template>
    <div>
        <h2>Articles</h2>
        <p>{{articles.articles}}</p>
    </div>
</template>

<script>
import ArticleSearch from './ArticleSearch';
import Article from './Article';
import articleApi from '../../services/api.js';

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
    articleApi.getArticles().then(articles => {
      console.log(articles);
      this.articles = articles;
    });
  },
};
</script>

<style>

</style>
