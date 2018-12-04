<template>
    <div>
        <h2>Articles</h2>
        <ArticleSearch/>
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
      this.articles = articles.articles;

    });
  },
};
</script>

<style>

</style>
