<template>
    <div class="results-list">
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
import Movie from './Movie';

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
