<template>
  <section>
    <h2>Search Articles</h2>
    <ArticleSearch />
    <Article />
    <p>{{articles.articles}}</p>
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
    articleApi.getArticles().then(articles => {
      console.log(articles);
      this.articles = articles;
    });
  }
};
</script>

<style>

</style>