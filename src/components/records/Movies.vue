<template>
    <div class="search-container">
      <ul v-if="movies">
        <Record v-for="(movie, i) in movies"
          :key="i"
          :movie="movie"
        />
      </ul>
    </div>
</template>

<script>
import api from '../../services/api';
import Record from './Record';

export default {
  components: {
    Record
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
      api.getMovies()
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
