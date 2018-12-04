<template>
  <section class="articles">
    <h2>Articles</h2>

    <ArticleSearch :onSearch="handleSearch" :search="search"/>

    <Loader :loading="loading"/>

    <p>
      <button @click="handlePage(-1)" :disabled="page === 1">Prev</button>
      Searching for &quot;{{ search }}&quot; - found {{total}} - page {{page}} of {{totalPages}}
      <button @click="handlePage(1)" :disabled="totalPages === page">Next</button>
    </p>

    <pre v-show="error" class="error">
      {{error}}
    </pre>

    <div class="search-container">
      <ul v-if="people">
        <Article v-for="(article, i) in articles"
            :key="i"
            :article="article"
        />
      </ul>
    </div>

  </section>
</template>

<script>
import api from '../../services/api.js';
import Article from './Article';
import ArticleSearch from './ArticleSearch';
import Loader from './Loader';
export default {
  data() {
    return {
      people: null,
      loading: false,
      error: null,
      search: decodeURI(this.$route.query.search),
      page: decodeURIComponent(this.$route.query.page) || 1,
      total: 0,
      perPage: 10
    };
  },
  components: {
    Article,
    ArticleSearch,
    Loader
  },
  created() {
    this.searchPeople();
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
      this.searchPeople();
    }
  },
  methods: {
    handleSearch(search) {
      this.search = search || '';
      this.page = 1;
      this.recordPage();
      this.searchPeople();
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
    searchArticle() {
      this.loading = true;
      this.error = null;

      api.getArticle(this.search, this.page)
        .then(response => {
          this.articles = response.results;
          this.total = response.count;
          this.loading = false;
        })
        .catch(err => {
          this.error = err.message;
          this.articles = null;
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
</style>
