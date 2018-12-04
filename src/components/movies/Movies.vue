<template>
    <div class="search-container">
      <ul v-if="movies">
        <Movie v-for="(movie, i) in movies"
          :key="i"
          :movie="movie"
        />
      </ul>
    </div>
</template>

<script>
import api from '../../services/api';
import Movie from './Movies';

export default {
  components: {
    Movie
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
      if(!this.q) return;

      api.getMovies(this.q)
        .then(response => {
          this.movies = response.Search;
        }
        );
    }
      
  }

};
</script>

<style>

</style>
