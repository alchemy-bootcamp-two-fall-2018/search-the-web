<template>
  <section>
    <h2>News Search</h2>



  </section>
</template>

<script>
import api from '../../services/api.js';

export default {
  data() {
    return {
      arts: null,
      loading: false,
      error: null,
      search: '',
      total: 0
    };
  },
  components: {
    
  },
  created() {
    api.getArticles()
      .then(arts => {
        console.log(arts);
      });
  }

};
</script>

<style>

</style>
