<template>
    <div>
        <h2>Articles</h2>
        <ul>
            <Article
            v-for="(article, i) in articles"
            :key="i"
            :article="article"
            />
        </ul>
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
      this.articles = articles.articles;
      console.log(articles);

    });
  },
};
</script>

<style>

</style>
