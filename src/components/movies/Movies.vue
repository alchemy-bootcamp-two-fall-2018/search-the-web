<template>
    <div>
    <MovieSearch v-bind:onSearch="handleSearch" v-bind:search="search"/>
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
    return {
      movies: null
    };

  },
  created() {
    this.searchMovie();
  },
  methods: {
    searchMovie() {
      //if(!this.q) return;

      api.getMovies(this.q)
        .then(response => {
          console.log('this proves we are getting api info', response);
          this.movies = response.Search;  
        }

        );
    }
      
  }

};
</script>

<style>

</style>
