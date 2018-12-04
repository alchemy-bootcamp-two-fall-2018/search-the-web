<template>
  <section class="movies">
    <h2>Movies</h2>

    <MovieSearch v-bind:onSearch="handleSearch" v-bind:search="search"/>

    <Loader :loading="loading" class=".load"/>


    <!-- <pre v-show="error" class="error">
      {{error}}
    </pre> -->

    <div class="search-container">
      <ul v-if="movies">
        <Movie v-for="(movie, index) in movies"
          v-bind:key="index"
          v-bind:movie="movie"
        />
      </ul>
    </div>

  </section>
</template>

<script>
import movieApi from '../../services/movieApi.js';
import Movie from './Movie.vue';
import MovieSearch from './MovieSearch.vue';

export default {
  data() {
    const search = this.$route.query.search;
    return {
      movies: null,
      filteredMovies: [],
      search: search ? decodeURIComponent(this.$route.query.search) : ''
    };
  },
  components: {
    Movie,
    MovieSearch

  },
  created() {
    this.searchMovies();
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
      this.search = search;
      this.searchMovies();
    },
    searchMovies() {
      this.loading = true;
      this.error = null;

      movieApi.getMovies(this.search)
        .then(response => {
          console.log('this is the response', response);
          this.movies = response.Search;
        });
    }
  }
};
</script>

<style>
  .load {
    position: absolute;
    top: 0; 
    right: 0;
    bottom: 0; 
    left: 0;
    color: white;
    font-weight: bolder;
    background: rgba(0, 0, 0, .6);
  }
  
</style>


