<template>
  <section class="people">
    <h2>Movies</h2>

    <!-- <Loader :loading="loading" class=".load"/> -->


    <pre v-show="error" class="error">
      {{error}}
    </pre>

</section>
</template>

<script>
import movieApi from '../../services/movieApi.js';

export default {
  data() {
    return {
      movies: null,
      loading: false,
      error: null,
      search: decodeURIComponent(this.$route.query.search)
    };
  },
  components: {

  },
  created() {
    // this.searchMovies();
    movieApi.getMovies()
      .then(response => {
        console.log(response);
        this.loading = false;
      });
  },
  watch: {
    $route(newRoute) {
      const newSearch = newRoute.query.search;
      // const oldSearch = oldRoute.query.search;

      this.search = decodeURIComponent(newSearch);
      this.searchMovies();
    }
  },
  methods: {
    handleSearch(search) {
      this.search = search || '';
      this.searchMovies();
    }
    // searchMovies() {
    //   this.loading = true;
    //   this.error = null;

    //   movieApi.getMovies(this.search)
    //     .then(response => {
    //       this.movies = response.results;
    //       this.loading = false;
    //     });
    // }
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


