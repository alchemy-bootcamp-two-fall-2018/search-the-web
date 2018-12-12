<template>
    <section class="articles">
        <h2>Articles</h2>
        <!--<button @click="searchArticles()">Get articles</button>-->
        <ArticlesSearch :onSearch="handleSearch" :search="search"/>
        <Loader :loading="loading"/>

        <p>
          <button @click="handlePage(-1)" :disabled="page === 1">Prev</button>
          Searching for &quot;{{ search }}&quot; - found {{total}} - page {{page}} of {{totalPages}}
          <button @click="handlePage(1)" :disabled="totalPages === page">Next</button>
        </p>

        <pre v-show="error" class="error">
            {{ error }}
        </pre>
        <div class="search-container">
          <p v-if="search">Searching for &quot;{{ search }}&quot;</p>-->
            :article="article"
          <ul v-if="articles">
            <Article v-for="(article, i) in articles"
              :key="i"
              :article="article"
            />
          </ul>
        </div>
    </section>
</template>

<script>
import Article from './Article';
import ArticleSearch from './ArticleSearch';
import Loader from './Loader';
import api from '../../services/api.js';

export default {
  data() {
    return {
      name: '',
      title: '',
      author: '',
      url: '',
      loading: false,
      search: decodeURIComponent(this.$route.query.search),
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
    this.searchArticles();
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
      this.searchArticles();
    }
  },
  methods: {
    handleSearch(search) {
      this.search = search || '';
      this.page = 1;
      this.recordPage();
      this.searchArticles();
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
    searchArticles() {
      this.loading = true;
      this.error = null;
      api.getArticles(this.search, this.page)
        .then(response => {
          this.articles = response.results;
          this.total = response.count;
          this.loading = false;
        })
        .catch(err => {
          this.error = err.message;
          this.people = null;
          this.loading = false;
        });


    }
  }

};
</script>

<style>

</style>
