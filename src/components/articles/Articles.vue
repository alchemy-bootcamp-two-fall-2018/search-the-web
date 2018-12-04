<template>
    <div>
        <h2>Articles Library</h2>
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
import ArticleSearch from './ArticleSearch.vue';
import Article from './Article.vue';
import articlesApi from '../../articlesApi.js';
import Loader from './Loader.vue';

export default {
  data() {
    return {
      articles: null,
      loading: false,
      news: decodeURIComponent(this.$route.query.news),
    };
  },
  components: {
    Article,
    ArticleSearch,
    Loader
  },
  watch: {
    $route(newRoute, oldRoute) {
      const newSearch = newRoute.query.news;
      const oldSearch = oldRoute.query.news;
      if(newSearch === oldSearch) return;
      this.news = decodeURIComponent(newSearch);
      this.searchArticles();
    }  
  },
  methods: {
      getArticles() {
        articlesApi.getArticles();

      handleSearch(news) ;
        this.news = news || '';
        this.searchArticles();
    },
    searchArticles() {
    this.loading = true;
    articlesApi.getArticles(this.news)
    .then(response => {
        this.articles = response.articles;
        this.loading = false;
    });
    }
  },
  created() {
    articlesApi.getArticles().then(articles => {
      this.articles = articles.articles;
    });
  }
};
</script>

<style>
.loader {
  position: absolute;
  top: 0; right: 0;
  bottom: 0; left: 0;
  color: rgb(233, 57, 57);
  font-weight: bolder;
  background: rgba(94, 16, 16, 0.6);
} 
</style>