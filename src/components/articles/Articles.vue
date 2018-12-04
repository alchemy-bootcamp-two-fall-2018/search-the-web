<template>
    <div>
        <h2>Articles</h2>
        <Loader
        :loading="loading"
        />
        <ArticleSearch
        :onSearch="handleSearch"
        />
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
import Loader from './Loader.vue';

export default {
  data() {
    return {
      articles: null,
      loading: false,
      q: decodeURIComponent(this.$route.query.q),
    };
  },
  components: {
    Article,
    ArticleSearch,
    Loader
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
  handleSearch(q) {
    this.q = q || '';
    this.searchArticles();
  },
  searchArticles() {
    this.loading = true;
  }
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
