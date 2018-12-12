<template>
  <section>
    <h2>News</h2>
    <NewsSearch :onSearch="handleSearch" :search="search"/>
    <pre v-show="error" class="error">
      {{error}}
    </pre>
    <p v-if="search">Searching for &quot;{{ search }}&quot;</p>
    <div>
      <ul v-if="news">
        <NewsArticle v-for="(newsArticle, i) in news"
          :key="i"
          :newsArticle="newsArticle"/>
        <NewsArticle/>
      </ul>
    </div>
  </section>
</template>

<script>
import api from '../../services/api.js';
import NewsArticle from './NewsArticle';
import NewsSearch from './NewsSearch';
export default {
  data() {
    let search = this.$route.query.search;
    return {
      news: null,
      loading: false,
      error: null,
      search: search ? decodeURIComponent(search) : ''
    };
  },
  components: {
    NewsSearch,
    NewsArticle
  },
  created() {
    this.searchNews();
  },
  watch: {
    $route(newRoute, oldRoute) {
      const newSearch = newRoute.query.search;
      const oldSearch = oldRoute.query.search;
      if(newSearch === oldSearch) return;
      this.handleSearch(decodeURIComponent(newSearch));
    }
  },
  methods: {
    handleSearch(search) {
      this.search = search || '';
      this.searchNews();
    },
    searchNews() {
      this.loading = true;
      this.error = null;
      api.getNews(this.search)
        .then(response => {
          this.news = response.articles;
          this.loading = false;
        })
        .catch(err => {
          this.error = err.message;
          this.loading = false;
        });
    }
  }
};
</script>