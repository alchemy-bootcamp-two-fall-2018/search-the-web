<template>
  <section>
    <h2>Enter a subject to get articles:</h2>
    <ArticleSearch />
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
      this.articles = articles.articles;
    });
  }
};
</script>

<style>

</style>