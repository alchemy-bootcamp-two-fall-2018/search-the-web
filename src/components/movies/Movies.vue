<template>
    <div>
    <MovieSearch v-bind:onSearch="handleSearch" v-bind:search="search"/>
<pre v-show="error" class="error">{{error}}</pre>
    <div class="results-list">
      <ul v-if="movies">
        <Movie v-for="(movie, i) in movies"
          :key="i"
          :movie="movie"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import api from '../../services/api';
import Movie from './Movie';
import MovieSearch from './MovieSearch.vue';

export default {
  components: {
    Movie,
    MovieSearch
  },
  data() {
    const search = this.$route.query.search;
    return {
      movies: null,
      search: search ? decodeURIComponent(this.$route.query.search) : '',
      error: null,
    };

  },
  created() {
    this.searchMovie();
  },
  watch: {
    $route(newRoute) {
      const newSearch = newRoute.query.search;
      this.search = decodeURIComponent(newSearch);
      this.searchMovie();
    }
  },
  methods: {
    handleSearch(search) {
      this.search = search || '';
      this.searchMovie();
    },
    searchMovie() {
      // if(!this.q) return;
      this.error = null;

      api.getMovies(this.search)
        .then(response => {
          // console.log('this proves we are getting api info', response);
          this.movies = response.Search;  
        })
        .catch(error => {
          this.error = error.message;
          this.movies = null;
        });
    }
      
  }

};
</script>

<style>
ul {
  list-style-type: none;
}
.error {
    color: red;
}
</style>
