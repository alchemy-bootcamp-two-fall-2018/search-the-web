<template>
  <section class="news">
    <h2>News</h2>

    <NewsSearch :onSearch="handleSearch" :search="search" />

    <Loader :loading="loading" />

    <p>
      <button @click="handlePage(-1)" :disabled="page === 1">Prev</button>
      Searching for &quot;{{ search }}&quot; - found {{total}} - page {{page}} of {{totalPages}}
      <button @click="handlePage(1)" :disabled="totalPages === page">Next</button>
    </p>

    <pre v-show="error" class="error">
      {{error}}
    </pre>

    <div class="search-container">
      <ul v-if="news">
        <Person v-for="(newsStory, i) in news"
          :key="i"
          :news="news"
        />
      </ul>
    </div>
  </section>
</template>

<script>
import api from '../services/api';
import NewsStory from './NewsStory';
import NewsSearch from './NewsSearch';
import Loader from './Loader';

export default {
  data() {
    return {
      news: null,
      loading: false,
      error: null,
      search: decodeURIComponent(this.$route.query.search),
      page: decodeURIComponent(this.$route.query.page) || 1,
      total: 0,
      perPage: 10
    };
  },
  components: {
    NewsStory,
    NewsSearch,
    Loader
  },
  created() {
    this.searchNews();
  },
  computed: {
    totalPages() {
      return Math.ceil(this.total / this.perPage);
    }
  },
  watch: {
    $route(newRoute, oldRoute) {
      const newSearch = newRoute.query.search;
      const oldSearch = oldRoute.query.search;
      let newPage = newRoute.query.page;
      const oldPage = oldRoute.query.page;
      if(newSearch === oldSearch && newPage === oldPage) return;
      if(newSearch !== oldSearch) {
        newPage = 1;
      }
      this.search = decodeURIComponent(newSearch);
      this.page = newPage;
      this.searchNews();
    }
  },
  methods: {
    handleSearch(search) {
      this.search = search || '';
      this.page = 1;
      this.recordPage();
      this.searchNews();
    },
    handlePage(increment) {
      this.page += increment;
      this.recordPage();
    },
    recordPage() {
      this.$router.push({
        query: {
          
        }
      })
    }
  }
};
</script>

<style>

</style>
