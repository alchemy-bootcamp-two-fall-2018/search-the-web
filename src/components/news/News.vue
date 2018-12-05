<template>
  <section class="news">
    <h2>News</h2>

    <NewsSearch :onSearch="handleSearch" :search="search" />

    <Loader :loading="loading" />

    <p>
      <button @click="handlePage(-1)" :disabled="page === 1">Prev</button>
      Searching for &quot;{{search}}&quot; - found {{total}} - page {{page}} of {{totalPages}}
      <button @click="handlePage(1)" :disabled="totalPages === page">Next</button>
    </p>

    <pre v-show="error" class="error">
      {{error}}
    </pre>

    <div class="search-container">
      <ul v-if="news">
        <NewsStory v-for="(newsStory, i) in news"
          :key="i"
          :newsStory="newsStory"
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
          search: encodeURIComponent(this.search),
          page: this.page
        }
      });
    },
    searchNews() {
      this.loading = true;
      this.error = null;

      api.getNews(this.search, this.page)
        .then(response => {
          console.log('results', response.results);
          this.news = response.articles;
          this.total = response.totalResults;
          this.loading = false;
        })
        .catch(err => {
          this.error = err.message;
          this.news = null;
          this.loading = false;
        });
    }
  }
};
</script>

<style>
.error {
  color: red;
}
.loader {
  position: absolute;
  top: 0; right: 0;
  bottom: 0; left: 0;
  color: white;
  font-weight: bolder;
  background: rgba(0, 0, 0, .6);
}

h2 {
  text-decoration: underline;
}

p {
  border: 2px outset gray;
  padding: 5px 0;
}

ul {
  background: lightgray;
  box-shadow: 6px 6px 6px gray;
  border: 1px solid gray;
  padding: 5px auto;
  text-align: left;
}
</style>