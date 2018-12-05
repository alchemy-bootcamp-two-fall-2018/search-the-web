<template>
  <section class="movies">
    <h2>Search by Movie Title</h2>

    <MovieSearch v-bind:onSearch="handleSearch" v-bind:search="search"/>
    <Loader v-bind:loading="loading"/>
    <pre v-show="error" class="error">{{error}}</pre>

    <div class="search-container">
      <ul v-if="movies">
        <Movie v-for="(movie, index) in movies"
          v-bind:key="index"
          v-bind:movie="movie"/>
      </ul>
    </div>

  </section>
</template>

<script>
import movieApi from '../../services/movieApi.js';
import Movie from './Movie.vue';
import MovieSearch from './MovieSearch.vue';
import Loader from './Loader.vue';

export default {
  data() {
    const search = this.$route.query.search;
    return {
      movies: null,
      loading: false,
      error: null,
      filteredMovies: [],
      search: search ? decodeURIComponent(this.$route.query.search) : ''
    };
  },
  components: {
    Movie,
    MovieSearch,
    Loader
  },
  created() {
    this.searchMovies();
  },
  watch: {
    $route(newRoute) {
      const newSearch = newRoute.query.search;
      this.search = decodeURIComponent(newSearch);
      this.searchMovies();
    }
  },
  methods: {
    handleSearch(search) {
      this.search = search || '';
      this.searchMovies();
    },
    searchMovies() {
      this.loading = true;
      this.error = null;

      movieApi.getMovies(this.search)
        .then(response => {
          this.movies = response.Search;
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
  .loader {
    position: absolute;
    top: 0; 
    right: 0;
    bottom: 0; 
    left: 0;
    color: white;
    font-weight: bolder;
    background: rgba(0, 0, 0, .6);
  }
  .error {
    color: red;
  }
  .movies {
    position: relative;
    top: -250px;
  }
  h2 {
    font-size: 2em;
    text-shadow: 2px 2px 2px lightgray;
  }
</style>


